const mysql = require("mysql2");
const config = require("./config");
const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  database: config.MYSQL_DATABASE,
  password: config.MYSQL_PASSWORD,
});
pool.getConnection((err, conn) => {
  console.log("数据库连接");
  // conn.query(/* ... */);
  // conn.connect((err) => {
  //   if(err) {
  //     console.log("链接失败");
  //   } else {
  //     console.log("数据库连接成功");
  //   }
  // })    
})
module.exports = pool.promise();
