// DO YOUR MAGIC
const express = require("express");
const CAR = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("./cars-middleware");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await CAR.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    const car = await CAR.getById(req.params.id);
    res.json(car);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  res.json("new post");
});

module.exports = router;
