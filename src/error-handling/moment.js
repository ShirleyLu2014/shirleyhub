const { MOMENT_CONTENT_IS_NULL } = require("../constants/moment")
const momentErrorHandle = (err, ctx) => {
    let status = 400;
    switch(err.message) {
        case MOMENT_CONTENT_IS_NULL:
            status = 400;
            break;
    }
    ctx.status = status;
    ctx.body = err.message;
}
module.exports = momentErrorHandle
