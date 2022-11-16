const { MOMENT_CONTENT_IS_NULL } = require("../constants/moment");
const verifyContentIsNull = async (ctx, next) => {
  const { content } = ctx.request.body;
  console.log("content", content);
  if (!content) {
    const error = new Error(MOMENT_CONTENT_IS_NULL);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
module.exports = {
  verifyContentIsNull,
};
