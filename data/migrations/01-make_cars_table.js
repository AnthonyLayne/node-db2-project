exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.string("vin", 13).notNullable().unique();
    tbl.string("make", 235).notNullable();
    tbl.string("model", 6).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("title");
    tbl.string("transmission");
  });
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists("cars");
};
