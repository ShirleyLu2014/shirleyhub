const  {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_ALREAD_EXISTS
} = require( "../constants/error-type");
const errHandle = (err, ctx) => {
    let status, message;
    switch(err.message) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            // message = NAME_OR_PASSWORD_IS_REQUIRED;
            break;
        case NAME_ALREAD_EXISTS:
            status = 409;
            // message = NAME_OR_PASSWORD_IS_REQUIRED;
            break;
        default:
            status = 404;
            err.message = "NOT FOUND";
    }
    ctx.status = status;
    ctx.body = err.message;

}
module.exports = errHandle;