const userService = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    const result = await userService.create(user);
    console.log('result', result)
    ctx.body = "用户创建成功";
  }
}
module.exports = new UserController();
