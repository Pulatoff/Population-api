const express = require("express");
const PopulationRoute = express.Router();
const popController = require("../controller/populationController");

PopulationRoute.route("/")
  .get(popController.getAllPop)
  .post(popController.addPop);

PopulationRoute.route("/:id")
  .get(popController.getPop)
  .patch(popController.updatePop)
  .delete(popController.deletePop);

module.exports = PopulationRoute;
