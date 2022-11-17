const Router = require("koa-router");
const {
  verifyAuthMiddle,
  verifyUserIdIsNull,
  verifyUserIsRghtful,
} = require("../middleware/verifyCommon.middleware");
const { 
  verifyContentIsNull,
  verifyMomentIdIsNull,
  verifyMomentBelongToUser,
  verifyMomentIsLegal,
  verifyPerssion
 } = require("../middleware/moment.middleware");
const {
  create,
  detail,
  list,
  update,
  deleteMoment
} = require("../controller/moment.controller");
const momentService = require("../service/moment.service");
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
momentRouter.post("/update", 
  verifyAuthMiddle,
  verifyContentIsNull,
  verifyMomentIdIsNull, 
  verifyUserIdIsNull, 
  verifyUserIsRghtful,
  verifyMomentIsLegal,
  verifyMomentBelongToUser,
  update);
// 删除动态
momentRouter.delete(
  "/delete",
  verifyAuthMiddle,
  verifyMomentIdIsNull, 
  verifyUserIdIsNull, 
  verifyUserIsRghtful,
  verifyPerssion,
  deleteMoment
)
module.exports = momentRouter;
