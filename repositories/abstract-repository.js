class AbstractRepository {
  constructor() {
    this.idName = 'id';
  }

  async entityExists(id) {
    AbstractRepository.throwNotImplementedError();
  }

  async validateEntityExists(id) {
    if (!(await this.entityExists(id))) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }
  }

  async findAll() {
    AbstractRepository.throwNotImplementedError();
  }

  async create(data) {
    AbstractRepository.throwNotImplementedError();
  }

  async findById(id) {
    AbstractRepository.throwNotImplementedError();
  }

  async updateById(id, data) {
    AbstractRepository.throwNotImplementedError();
  }

  async deleteById(id) {
    AbstractRepository.throwNotImplementedError();
  }

  static throwNotImplementedError() {
    throw new Error('Method not implemented');
  }
}

module.exports = { AbstractRepository };
