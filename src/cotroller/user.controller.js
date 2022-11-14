const userService = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    userService.create();
    ctx.body = "用户创建成功";
  }
}
module.exports = new UserController();
