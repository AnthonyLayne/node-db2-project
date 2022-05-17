// STRETCH
const cars = [
  {
    vin: "3B7HF13Y81G193584",
    make: "ford",
    model: "mustang",
    mileage: 12341,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JHMSZ542XDC028494",
    make: "volkswagen",
    model: "passat",
    mileage: 70000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "ZDM1UB5W86B016210",
    make: "volkswagen",
    model: "eurovan",
    mileage: 12341,
    title: "clean",
    transmission: "manual",
  },
];
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert(cars);
    });
};
