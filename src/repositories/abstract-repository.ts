import {Model,Document} from "mongoose";

export class AbstractRepository {
  constructor() {
  }

  async entityExists(id: string): Promise<boolean> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async validateEntityExists(id: string) {
    if (!(await this.entityExists(id))) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }
  }

  async findAll(): Promise<Document<any>[]> {
    AbstractRepository.throwNotImplementedError();
  }

  async create(data: any): Promise<Document<any>> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async findById(id: string): Promise<Document<any>> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async updateById(id: string, data: any) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async deleteById(id: string) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  static throwNotImplementedError(): never {
    throw new Error('Method not implemented');
  }
}
