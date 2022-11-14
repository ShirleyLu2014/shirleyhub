const  {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_ALREAD_EXISTS
} = require( "../constants/error-type");
const userService= require("../service/user.service");
const verifyUser = async (ctx, next) => {
    // 获取用户名和密码
    const { name, password } = ctx.request.body;
    // 判断用户名和密码不可为空
    if(!name || !password ) {
        // 返回错误信息
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit("error", error, ctx);
    } else {
        const result = await userService.getUserByName(name);
        console.log('hahah', result);
        if(result.length) {
            const error = new Error(NAME_ALREAD_EXISTS);
            return ctx.app.emit("error", error, ctx);
        }
    }
    // 判断用户是否存在
    await next();
}
module.exports = {
    verifyUser
}