const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_ALREAD_EXISTS,
    NAME_IS_NOT__EXISTS,
    PASSWORD_IS_ERROR,
    TOKEN_IS_INVALID,
    USERID_IS_NULL
  } = require("../constants/error-type");
  const userErrorHandle = (err, ctx) => {
    let status, message;
    switch (err.message) {
      case NAME_OR_PASSWORD_IS_REQUIRED:
        status = 400;
        // message = NAME_OR_PASSWORD_IS_REQUIRED;
        break;
      case NAME_ALREAD_EXISTS:
        status = 409;
        // message = NAME_OR_PASSWORD_IS_REQUIRED;
        break;
      case NAME_IS_NOT__EXISTS:
        status = 400;
        break;
      case PASSWORD_IS_ERROR:
        status = 400;
        break;
      case TOKEN_IS_INVALID:
        status = 405;
        break;
      case USERID_IS_NULL:
        status = 400;
        break;
      default:
        status = 404;
        err.message = "NOT FOUND";
    }
    ctx.status = status;
    ctx.body = err.message;
  };
  module.exports = userErrorHandle;
  