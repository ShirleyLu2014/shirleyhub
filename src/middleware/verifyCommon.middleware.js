const { NAME_OR_PASSWORD_IS_REQUIRED } = require("../constants/error-type");
const md5Encrypt = require("../utils/password-handle");
const { createToken } = require("../utils/create-token");
const verifyIsEmpty = async (ctx, next) => {
  console.log("判断是否为空中间件");
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    // 返回错误信息
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
const handlePassword = async (ctx, next) => {
  console.log("密码加密");
  let { password } = ctx.request.body;
  ctx.request.body.password = md5Encrypt(password);
  await next();
};
const createTokenMiddle = async (ctx, next) => {
  const { id, name } = ctx.user;
  const value = { id, name };
  const token = createToken(value);
  console.log("token", token);
  ctx.user.token = token;
  await next();
};
module.exports = { verifyIsEmpty, handlePassword, createTokenMiddle };
