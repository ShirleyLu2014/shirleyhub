// 登录授权接口
const Router = require("koa-router");
const { login } = require("../controller/auth.controller.js");
const {
  verifyUserIsExists,
  verifyUserPassword,
} = require("../middleware/auth.middleware");
const {
  verifyIsEmpty,
  handlePassword,
  createTokenMiddle,
} = require("../middleware/verifyCommon.middleware");
const authRouter = new Router();
authRouter.post(
  "/login",
  verifyIsEmpty,
  verifyUserIsExists,
  handlePassword,
  verifyUserPassword,
  createTokenMiddle,
  login
);
module.exports = authRouter;
