const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const useRoutes = require("../router/index");
const errHandle = require("./error-handle");
app.use(bodyParser());
// 注册路由
useRoutes(app);
app.on("error", errHandle);
module.exports = app;
