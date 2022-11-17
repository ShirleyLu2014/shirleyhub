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
  async queryMomentDetail(momentId) {
    const statement = `
    SELECT user_id userId FROM MOMENT WHERE id = ?;
    `;
    const result = await connection.execute(statement, [momentId]);
    return result[0];
  }
  // 更新动态
  async updateMoment(value) {
    const { content, momentId } = value;
    const statement = `
    UPDATE moment SET content = ? WHERE id = ?;
    `;
    const result = await connection.execute(statement, [content, momentId]);
    return result;
  }
  // 删除动态
  async deleteMoment(momentId) {
    const statement = `
    DELETE FROM moment WHERE id = ?;
    `;
    const result = await connection.execute(statement, [momentId]);
    return result;
  }
  // 查询动态是否是某人创建的
  async queryMomentPerssion(momentId, userId) {
    const statement = `
    SELECT * FROM moment WHERE id = ? AND user_id = ?;
    `;
    const result = await connection.execute(statement, [momentId, userId]);
    return result[0];
  }
}
module.exports = new MomentService();
