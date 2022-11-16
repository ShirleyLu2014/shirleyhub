CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
SELECT DATABASE();
CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
SELECT DATABASE();
CREATE TABLE IF NOT EXISTS moment (
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000) NOT NULL,
	user_id INT NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(user_id) REFERENCES users(id)
);
INSERT INTO moment (user_id, moment) VALUES (?, ?);
SELECT 
   m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
	 JSON_OBJECT('id', u.id, 'name', u.name) user
   FROM moment m 
	 LEFT JOIN users u ON m.user_id = u.id
	 WHERE m.id = 4;
       
# 查询列表数据
SELECT 
   m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
	 JSON_OBJECT('id', u.id, 'name', u.name) user
   FROM moment m 
	 LEFT JOIN users u ON m.user_id = u.id
	 LIMIT 0, 10;