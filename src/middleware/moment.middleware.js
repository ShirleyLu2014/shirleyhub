const verifyContentIsNull = (ctx, next) => {
    const { content } = ctx.request.body;
    if(!content) {
        const error = new Error()
    }
}
module.exports = {
    verifyContentIsNull
}