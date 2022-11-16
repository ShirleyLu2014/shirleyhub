//
const momentService = require("../service/moment.service");
class momentController {
  // 发表动态
  async create(ctx, next) {
    console.log("momentcontroller");
    // 获取用户id与内容content,与token中的id进行比对，一致再继续操作
    const { userId, content } = ctx.request.body;
    try {
      const result = await momentService.createMoment({ userId, content });
      ctx.body = result;
    } catch (err) {
      console.log("err", err);
    }
  }
  // 查询动态详情
  async detail(ctx, next) {
    const momentId = ctx.params.momentId;
    try {
      const result = await momentService.queryDetail(momentId);
      ctx.body = result;
    } catch (err) {
      ctx.body = err.message;
    }
  }
  // 查询动态list
  async list(ctx, next) {
    const { offset, size } = ctx.query;
    // 查询列表
    try {
      const result = await momentService.getList({ offset, size });
      ctx.body = result;
    } catch (err) {
      ctx.body = err.message;
    }
  }
  // 更新动态
  async update(ctx, next) {
    console.log("更新动态");
    ctx.body = "更新动态成功";
  }
}
module.exports = new momentController();
