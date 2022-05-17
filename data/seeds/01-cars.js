// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "ford",
    model: "mustang",
    mileage: 12341,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "9292929292929",
    make: "volkswagen",
    model: "passat",
    mileage: 70000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "8383838383838",
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
