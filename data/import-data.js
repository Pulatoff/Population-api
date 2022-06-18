const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const fs = require("fs");
const mongoose = require("mongoose");
const model = require("../model/populationModel");
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/population.json`, "utf-8")
);

console.log(data);
const DB = process.env.DB.replace("<password>", process.env.PASSWORD).replace(
  "<username>",
  process.env.LOGIN
);

mongoose.connect(
  DB,
  () => {
    console.log("DB connected");
  },
  () => {
    console.log("error to connected");
  }
);

async function addPop() {
  try {
    console.log("111");
    const datas = await model.create(data);
    console.log(datas);
  } catch (e) {
    console.log(`hato ${e.message}`);
  }
}

addPop();
