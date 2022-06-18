const express = require("express");
const populationRoute = express.Router();

populationRoute.route("/").get().post();

populationRoute.route("/:id").get().patch().delete();
