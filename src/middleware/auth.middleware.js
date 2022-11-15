const {
  NAME_IS_NOT__EXISTS,
  PASSWORD_IS_ERROR,
} = require("../constants/error-type");
const userService = require("../service/user.service");
const verifyUserIsExists = async (ctx, next) => {
  console.log("verifyLgin");
  const { name, password } = ctx.request.body;
  // 判断用户名和密码是否为空
  // 判断用户是否存在
  const result = await userService.getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(NAME_IS_NOT__EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = user;
  // 判断密码是否正确
  await next();
};
// 判断用户密码是否正确
const verifyUserPassword = async (ctx, next) => {
  console.log("ctx,", ctx.user);
  console.log("判断密码是否正确");
  const { password: librarayPassword } = ctx.user;
  const { name, password } = ctx.request.body;
  console.log(name, password);
  if (librarayPassword !== password) {
    const error = new Error(PASSWORD_IS_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
module.exports = {
  verifyUserIsExists,
  verifyUserPassword,
};
