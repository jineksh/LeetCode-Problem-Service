// Base Service class for CRUD operations
// Extend this class in your specific service and pass your repository instance to the constructor
// Example:
// const Service = require('./index');
// const UserRepository = require('../repository/user.repository');
// class UserService extends Service {
//   constructor() {
//     super(new UserRepository());
//   }
// }

class Service {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.error('Service Create Error:', error);
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
      console.error('Service Get Error:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.repository.update(id, data);
      return result;
    } catch (error) {
      console.error('Service Update Error:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await this.repository.delete(id);
      return result;
    } catch (error) {
      console.error('Service Delete Error:', error);
      throw error;
    }
  }
}

module.exports = Service;
