import { AbstractRepository } from '../repositories/abstract-repository';

class InMemoryRepository extends AbstractRepository {
  constructor() {
    super();
    this.data = {};
  }

  async entityExists(id) {
    return Object.prototype.hasOwnProperty.call(this.data, id);
  }

  async findAll() {
    return Object.values(this.data);
  }

  async create(data) {
    const id = data[this.idName];

    if (typeof id === 'undefined') {
      throw new Error('Missing entity Id');
    }

    if (await this.entityExists(id)) {
      throw new Error(`Entity with id "${id}" already exists`);
    }

    this.data[id] = data;
  }

  async findById(id) {
    await this.validateEntityExists(id);
    return this.data[id];
  }

  async updateById(id, data) {
    const oldEntity = await this.findById(id);

    const newId = Object.prototype.hasOwnProperty.call(data, this.idName) ? data[this.idName] : id;
    const idChanged = newId !== id;

    if (idChanged) {
      if (await this.entityExists(newId)) {
        throw new Error(`Cannot update the Id of "${id}" because entity with Id "${newId}" already exists`);
      }

      delete this.data[id];
    }

    const updatedEntity = { ...oldEntity, ...data };

    this.data[newId] = updatedEntity;
  }

  async deleteById(id) {
    await this.validateEntityExists(id);
    delete this.data[id];
  }
}

module.exports = { InMemoryRepository };
