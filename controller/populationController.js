const getAllPop = async (req, res) => {
  try {
  } catch (e) {
    erorFunc(req, res, e);
  }
};

const addPop = async (req, res) => {
  try {
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const getPop = async (req, res) => {
  try {
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const updatePop = async (req, res) => {
  try {
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const deletePop = async (req, res) => {
  try {
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

module.exprorts = { getAllPop, getPop, addPop, deletePop, updatePop };
