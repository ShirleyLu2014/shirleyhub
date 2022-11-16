const { MOMENT_CONTENT_IS_NULL } = require("../src/constants/moment");
const momentErrorHandle = (err, ctx) => {
  console.log("进来错误处理了吗");
  let status;
  switch (err.message) {
    case MOMENT_CONTENT_IS_NULL:
      console.log(111);
      status = 400;
      break;
    default:
      status = 400;
      err.message = "NOT FOUND";
  }
  ctx.status = status;
  ctx.body = err.message;
};
module.exports = momentErrorHandle;
