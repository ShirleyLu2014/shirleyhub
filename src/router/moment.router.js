const Router = require("koa-router");
const { verifyAuthMiddle, verifyUserIdIsNull } = require("../middleware/verifyCommon.middleware");
const { create } = require("../controller/moment.controller");
const momentRouter = new Router({
    prefix: "/moment"
})
momentRouter.post("/", verifyAuthMiddle, verifyUserIdIsNull, create);
module.exports = momentRouter;