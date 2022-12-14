const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const getKeysFilePath = () => {
  let filepath = path.resolve(__dirname);
  console.log(filepath);
  filepath = filepath.substring(0, filepath.lastIndexOf("/"));
  filepath = filepath.substring(0, filepath.lastIndexOf("/"));
  return filepath;
};
const createToken = (value) => {
  // const PRIVATE_KRY = fs.readFileSync("/keys/private.key");
  const PRIVATE_KRY = fs.readFileSync(getKeysFilePath() + "/keys/private.key");
  const token = jwt.sign(value, PRIVATE_KRY, {
    expiresIn: 1000000,
    algorithm: "RS256",
  });
  return token;
};
const verifyToken = (token) => {
  const PUBLIC_KEY = fs.readFileSync(getKeysFilePath() + "/keys/public.key");
  console.log("PUBLIC_KEY", PUBLIC_KEY);
  return jwt.verify(token, PUBLIC_KEY)
};
module.exports = { createToken, verifyToken };
