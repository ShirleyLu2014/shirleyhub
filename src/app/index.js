const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const userRouter = require("../router/userRouter");
app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
module.exports = app;
