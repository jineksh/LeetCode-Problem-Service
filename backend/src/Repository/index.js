// Base CRUD repository for Mongoose models
// Extend this class in your specific repository and pass your model to the constructor
// Example:
// const CrudRepository = require('./index');
// class UserRepository extends CrudRepository {
//   constructor() {
//     super(UserModel);
//   }
// }

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const createdDoc = await this.model.create(data);
      return createdDoc;
    } catch (error) {
      console.error('Create Error:', error);
      throw error;
    }
  }

  async get(id) {
    try {
      const doc = await this.model.findById(id);
      return doc;
    } catch (error) {
      console.error('Get Error:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedDoc = await this.model.findByIdAndUpdate(id, data, { new: true });
      return updatedDoc;
    } catch (error) {
      console.error('Update Error:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.model.findByIdAndDelete(id);
      return deletedDoc;
    } catch (error) {
      console.error('Delete Error:', error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
