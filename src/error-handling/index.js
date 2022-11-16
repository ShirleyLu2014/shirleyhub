const fs = require("fs");
const errorHandling = (app) => {
  let handleFn;
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    } else {
      const errorHandle = require(`./${file}`);
      handleFn = () => {
        errorHandling(app);
      };
      app.on("error", errorHandle);
    }
  });
};
module.exports = errorHandling;
