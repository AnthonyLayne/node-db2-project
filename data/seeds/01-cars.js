// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "ford",
    model: "mustang",
    mielage: 12341,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1111111111111",
    make: "volkswagen",
    model: "passat",
    mielage: 70000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1111111111111",
    make: "volkswagen",
    model: "eurovan",
    mielage: 12341,
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
