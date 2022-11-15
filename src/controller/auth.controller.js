class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = ctx.user;
  }
}
module.exports = new AuthController();
