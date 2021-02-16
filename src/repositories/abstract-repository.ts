import { Document } from 'mongoose';
import { T } from '../util/types';

export class AbstractRepository {
  async entityExists(id: string): Promise<boolean> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async validateEntityExists(id: string): Promise<void> {
    if (!(await this.entityExists(id))) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }
  }

  findAll(): Promise<Document<T>[]> {
    AbstractRepository.throwNotImplementedError();
  }

  create(data: T): Promise<Document<T>> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  findById(id: string): Promise<Document<T>> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  updateById(id: string, data: T): Promise<void> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  deleteById(id: string): Promise<void> { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  static throwNotImplementedError(): never {
    throw new Error('Method not implemented');
  }
}
