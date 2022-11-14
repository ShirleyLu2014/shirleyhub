const app = require("./app/index");
const { APP_PORT } = require("./app/config");
app.listen(APP_PORT, () => {
  console.log("服务启动");
});
console.log("APP_PORT", APP_PORT);
