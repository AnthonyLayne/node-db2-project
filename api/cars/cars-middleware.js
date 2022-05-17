const CAR = require("./cars-model");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const cars = await CAR.getById(req.params.id);
    res.json(cars);
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
