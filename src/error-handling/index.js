const fs = require("fs");
const errorHandling = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file === "index.js") {
          return;
        } else {
          const errorHandling = require(`./${file}`);
          app.on("error", errorHandling);
        }
      });
}
module.exports = errorHandling