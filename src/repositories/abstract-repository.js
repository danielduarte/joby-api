class AbstractRepository {
  constructor() {
    this.idName = 'id';
  }

  async entityExists(id) { // eslint-disable-line @typescript-eslint/no-unused-vars
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

  async create(data) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async findById(id) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async updateById(id, data) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  async deleteById(id) { // eslint-disable-line @typescript-eslint/no-unused-vars
    AbstractRepository.throwNotImplementedError();
  }

  static throwNotImplementedError() {
    throw new Error('Method not implemented');
  }
}

module.exports = { AbstractRepository };
