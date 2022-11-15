class momentController {
    async create(ctx) {
        // 获取用户id与内容content,与token中的id进行比对，一致再继续操作
        console.log("hahahah");
        console.log(ctx.user);
        console.log(1111);
        console.log("ctx", ctx);
        ctx.body = "it is moment";
        console.log(ctx)
    }
}
module.exports = new momentController();