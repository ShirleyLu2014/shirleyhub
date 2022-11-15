const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const useRoutes = require("../router/index");
const errorHandling = require("../error-handling")
app.use(bodyParser());
// 注册路由
useRoutes(app);
// 错误处理
errorHandling(app);
module.exports = app;
