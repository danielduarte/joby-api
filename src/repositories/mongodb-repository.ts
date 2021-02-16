import { AbstractRepository } from './abstract-repository';
import { Model, Document } from 'mongoose';
import { T, Filter } from '../util/types';

export class MongoDbRepository extends AbstractRepository {
  protected modelClass: Model<Document<T>>;

  constructor(modelClass: Model<Document<T>>) {
    super();
    this.modelClass = modelClass;
  }

  async entityExists(id: string): Promise<boolean> {
    const entity = await this.modelClass.findById(id);
    return entity !== null;
  }

  async findAll(filter?: Filter): Promise<Document<T>[]> {
    return this.modelClass.find(filter);
  }

  async create(data: T): Promise<Document<T>> {
    // eslint-disable-next-line new-cap
    const entity = new this.modelClass(data);
    return entity.save();
  }

  async findById(id: string): Promise<Document<T>> {
    const entity = await this.modelClass.findById(id);

    if (entity === null) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }

    return entity;
  }

  async update(filter: Filter, data: T): Promise<number> {
    const result = await this.modelClass.updateMany(filter, data);
    if (result.ok !== 1) {
      throw new Error('Error trying to update entities');
    }

    return result.n;
  }

  async updateById(id: string, data: T): Promise<void> {
    await this.modelClass.updateOne({ _id: id }, data);
  }

  async delete(filter?: Filter): Promise<number> {
    const result = await this.modelClass.deleteMany(filter);
    if (result.ok !== 1) {
      throw new Error('Error trying to delete entities');
    }

    return result.deletedCount;
  }

  async deleteById(id: string): Promise<void> {
    await this.modelClass.deleteOne({ _id: id });
  }
}
