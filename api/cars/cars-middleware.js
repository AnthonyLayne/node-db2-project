const CAR = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await CAR.getById(req.params.id);

    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const error = { status: 400 };
  if (!req.body.vin)
    return next({
      status: 400,
      message: "vin is missing",
    });
  if (!req.body.make)
    return next({
      status: 400,
      message: "make is missing",
    });
  if (!req.body.model)
    return next({
      status: 400,
      message: "model is missing",
    });
  if (!req.body.mileage)
    return next({
      status: 400,
      message: "mileage is missing",
    });
  next();
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (vinValidator.validate(req.body.vin)) {
    next();
  } else {
    next({ status: 400, message: `vin ${req.body.vin} is invalad` });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC "vin <vin number> already exists"
  try {
    const existingVin = await CAR.getByVin(req.body.vin);
    if (!existingVin) {
      next();
    } else {
      next({ status: 400, message: `vin ${req.body.vin} already exists` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
