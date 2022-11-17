const { 
  MOMENT_CONTENT_IS_NULL,
  MOMENT_ID_IS_NULL,
  MOMENT_IS_NOT_LEGAL
} = require("../constants/moment");
const {
  USERID_IS_NOT_LEGAL,
} = require("../constants/error-type")
const momentService = require("../service/moment.service")
const verifyContentIsNull = async (ctx, next) => {
  const { content } = ctx.request.body;
  console.log("content", content);
  if (!content) {
    const error = new Error(MOMENT_CONTENT_IS_NULL);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
const verifyMomentIdIsNull = async (ctx, next) => {
  const { momentId } = ctx.request.body;
  if(!momentId) {
    const error = new Error(MOMENT_ID_IS_NULL);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
// 验证库里面是否存在此条数据
const verifyMomentIsLegal = async (ctx, next) => {
  const { momentId } = ctx.request.body;
  try {
    const result = await momentService.queryMomentDetail(momentId);
    console.log(123, result);
    if(result.length !== 0) {
      await next();
    } else {
      const error = new Error(MOMENT_IS_NOT_LEGAL)
      return ctx.app.emit("error", error, ctx)
    } 
  } catch(err) {
    console.log(err);
  }
}
// 验证动态是否是请求用户创建
const verifyMomentBelongToUser = async (ctx, next) => {
  const { momentId, userId  } = ctx.request.body;
  try {
    const result = await momentService.queryMomentDetail(momentId);
    console.log(result[0].userId);
    if(userId === result[0].userId) {
      // 进行更新操作
      await next();
    } else {
      const error = new Error(USERID_IS_NOT_LEGAL)
      return ctx.app.emit("error", error, ctx)
    }
  } catch(err) {
    console.log(err)
  }
}
// 鉴权 动态是否是用户创建
const verifyPerssion = async (ctx, next) => {
  const { momentId, userId  } = ctx.request.body;
  try {
    const result = await momentService.queryMomentPerssion(momentId, userId);
    console.log(result);
    if(result.length !== 0) {
      await next();
    } else {
      const error = new Error(USERID_IS_NOT_LEGAL)
      return ctx.app.emit("error", error, ctx)
    }
    // if(userId === result[0].userId) {
    //   // 进行更新操作
    //   await next();
    // } else {
    //   const error = new Error(USERID_IS_NOT_LEGAL)
    //   return ctx.app.emit("error", error, ctx)
    // }
  } catch(err) {
    console.log(err)
  }
}
module.exports = {
  verifyContentIsNull,
  verifyMomentIdIsNull,
  verifyMomentBelongToUser,
  verifyMomentIsLegal,
  verifyPerssion
};
