const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  TOKEN_IS_INVALID,
  USERID_IS_NULL,
  USERID_IS_NOT_LEGAL,
} = require("../constants/error-type");
const md5Encrypt = require("../utils/password-handle");
const { createToken, verifyToken } = require("../utils/create-token");
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
const verifyAuthMiddle = async (ctx, next) => {
  console.log(1111);
  console.log("ctx.headers", ctx.headers);
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(TOKEN_IS_INVALID);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");
  console.log("token", token);
  try {
    const result = await verifyToken(token);
    console.log("揭秘", result);
    // user中存放从token中解析出来的用户信息
    ctx.user = result;
    console.log("hahah");
    await next();
  } catch (err) {
    const error = new Error(TOKEN_IS_INVALID);
    return ctx.app.emit("error", error, ctx);
    console.log("err", err);
  }
};
// 判断用户id是否为空
const verifyUserIdIsNull = async (ctx, next) => {
  console.log("用户id是否为空");
  const { userId } = ctx.request.body;
  if (!userId) {
    const error = new Error(USERID_IS_NULL);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
// 用户鉴权 操作用户是否与token中解析出来的一只
const verifyUserIsRghtful = async (ctx, next) => {
  const { userId } = ctx.request.body;
  const userIdInToken = ctx.user.id;
  if (userId !== userIdInToken) {
    const error = new Error(USERID_IS_NOT_LEGAL);
    return ctx.app.emit("error", error, ctx);
  }
  console.log("鉴权成功");
  await next();
};
module.exports = {
  verifyIsEmpty,
  handlePassword,
  createTokenMiddle,
  verifyAuthMiddle,
  verifyUserIdIsNull,
  verifyUserIsRghtful,
};
