const Router = require("koa-router");
const {
  verifyAuthMiddle,
  verifyUserIdIsNull,
  verifyUserIsRghtful,
} = require("../middleware/verifyCommon.middleware");
const { verifyContentIsNull } = require("../middleware/moment.middleware");
const {
  create,
  detail,
  list,
  update,
} = require("../controller/moment.controller");
const momentRouter = new Router({
  prefix: "/moment",
});
// 发表动态接口
momentRouter.post(
  "/",
  verifyAuthMiddle,
  verifyUserIdIsNull,
  verifyContentIsNull,
  verifyUserIsRghtful,
  create
);
// 查询动态详情接口
momentRouter.get("/detail/:momentId", detail);
// 查询动态列表
momentRouter.get("/list", list);
// 修改动态
momentRouter.post("/update", update);
module.exports = momentRouter;
