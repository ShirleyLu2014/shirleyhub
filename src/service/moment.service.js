const connection = require("../app/database");
class MomentService {
  async createMoment(value) {
    console.log("value", value);
    const { userId, content } = value;
    const statement = `INSERT INTO moment (user_id, content) VALUES (?, ?);`;
    const result = await connection.execute(statement, [userId, content]);
    console.log("result", result);
    return result[0];
  }
  async queryDetail(momentId) {
    const statement = `
        SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
        FROM moment m 
        LEFT JOIN users u ON m.user_id = u.id
        WHERE m.id = ?;
    `;
    const result = await connection.execute(statement, [momentId]);
    console.log("result", result);
    return result[0];
  }
  async getList({ offset, size }) {
    console.log(offset, size);
    const statement = `
        SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
        FROM moment m 
        LEFT JOIN users u ON m.user_id = u.id
        LIMIT ?, ?;
    `;
    const result = await connection.execute(statement, [offset, size]);
    return result[0];
  }
}
module.exports = new MomentService();
