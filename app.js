const express = require("express");
const morgan = require("morgan");
const app = express();
const PopulationRoute = require("./routes/populationRouter");
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/population", PopulationRoute);

module.exports = app;
