const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const PORT = +process.env.PORT || 8000;

app.listen(PORT, process.env.SERVER_URL, () => {
  console.log(`server works on ${PORT} port`);
});
