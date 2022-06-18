const popModel = require("../model/populationModel");
const APIFeatures = require("../helper/APIFeatures");

const getAllPop = async (req, res) => {
  try {
    let data = new APIFeatures(popModel, req.query)
      .filter()
      .pagination()
      .field()
      .sort();

    const datas = await data.surov;
    res.status(200).json(datas);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

const addPop = async (req, res) => {
  try {
    const data = await popModel.create(req.body);
    res.status(201).json({
      status: "success",
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const getPop = async (req, res) => {
  try {
    const data = await popModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const updatePop = async (req, res) => {
  try {
    const data = await popModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const deletePop = async (req, res) => {
  try {
    const data = await popModel.findByIdAndDelete(req.params.id);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

function erorFunc(req, res, e) {
  res.status(404).json({
    status: "not found",
    message: e.message,
  });
}

module.exports = { getAllPop, getPop, addPop, deletePop, updatePop };
