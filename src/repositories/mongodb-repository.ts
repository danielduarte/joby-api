import { AbstractRepository } from './abstract-repository';
import {Model,Document} from "mongoose";

export class MongoDbRepository extends AbstractRepository {

  protected modelClass: Model<Document<any>>;

  constructor(modelClass: Model<Document<any>>) {
    super();
    this.modelClass = modelClass;
  }

  async entityExists(id: string) {
    const entity = await this.modelClass.findById(id);
    return entity !== null;
  }

  async findAll(filter?: any) {
    return this.modelClass.find(filter);
  }

  async create(data: any) {
    // eslint-disable-next-line new-cap
    const entity = new this.modelClass(data);
    return entity.save();
  }

  async findById(id: string) {
    const entity = await this.modelClass.findById(id);

    if (entity === null) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }

    return entity;
  }

  async update(filter: any, data: any) {
    const result = await this.modelClass.updateMany(filter, data);
    if (result.ok !== 1) {
      throw new Error('Error trying to update entities');
    }

    return result.n;
  }

  async updateById(id: string, data: any) {
    await this.modelClass.updateOne({ _id: id }, data);
  }

  async delete(filter?: any) {
    const result = await this.modelClass.deleteMany(filter);
    if (result.ok !== 1) {
      throw new Error('Error trying to delete entities');
    }

    return result.deletedCount;
  }

  async deleteById(id: string) {
    await this.modelClass.deleteOne({ _id: id });
  }
}
