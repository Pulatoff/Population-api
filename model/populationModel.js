const mongoose = require("mongoose");

const indicator = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const country = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const population = mongoose.Schema({
  indicator: indicator,
  country: country,
  countryiso3code: String,
  date: String,
  value: Number,
});

module.exports = mongoose.model("population", population);
