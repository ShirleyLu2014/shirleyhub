class UserService {
  async create() {
    console.log("service");
  }
}
module.exports = new UserService();
