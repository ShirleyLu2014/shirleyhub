const Router = require("koa-router");
const { create } = require("../cotroller/user.controller");
const userRouter = new Router({
  prefix: "/user",
});
userRouter.post("/", create(ctx, next));
module.exports = userRouter;
