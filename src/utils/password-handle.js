const crypto = require("crypto");
const md5Encrypt = (value) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update(value).digest("hex");
  return result;
};
module.exports = md5Encrypt;
