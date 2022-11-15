const connection = require("../app/database");
// const md5Encrypt = require("../utils/password-handle");
class UserService {
  async create(user) {
    const { name, password } = user;
    console.log("将数据存储到数据库", user);
    const statement = `INSERT INTO users (name, password) VALUES(?, ?);`;
    const result = await connection.execute(statement, [name, password]);
    return result;
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}
module.exports = new UserService();
