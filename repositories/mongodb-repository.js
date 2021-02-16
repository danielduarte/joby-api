const { AbstractRepository } = require('../repositories/abstract-repository');

class MongoDbRepository extends AbstractRepository {
  constructor(modelClass) {
    super();
    this.modelClass = modelClass;
  }

  async entityExists(id) {
    const entity = await this.modelClass.findById(id);
    return entity !== null;
  }

  async findAll(filter) {
    return this.modelClass.find(filter);
  }

  async create(data) {
    // eslint-disable-next-line new-cap
    const entity = new this.modelClass(data);
    return entity.save();
  }

  async findById(id) {
    const entity = await this.modelClass.findById(id);

    if (entity === null) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }

    return entity;
  }

  async update(filter, data) {
    const result = await this.modelClass.updateMany(filter, data);
    if (result.ok !== 1) {
      throw new Error('Error trying to update entities');
    }

    return result.n;
  }

  async updateById(id, data) {
    await this.modelClass.updateOne({ _id: id }, data);
  }

  async delete(filter) {
    const result = await this.modelClass.deleteMany(filter);
    if (result.ok !== 1) {
      throw new Error('Error trying to delete entities');
    }

    return result.deletedCount;
  }

  async deleteById(id) {
    await this.modelClass.deleteOne({ _id: id });
  }
}

module.exports = { MongoDbRepository };
