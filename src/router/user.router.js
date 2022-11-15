const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const { verifyUser } = require("../middleware/user.middleware");
const {
  verifyIsEmpty,
  handlePassword,
} = require("../middleware/verifyCommon.middleware");
const userRouter = new Router({
  prefix: "/user",
});
// 用户创建接口
userRouter.post("/", verifyIsEmpty, verifyUser, handlePassword, create);
module.exports = userRouter;
