/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("types", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
    })
    .createTable("plants", (table) => {
      table.string("id").primary();
      table
        .string("type_id")
        .references("types.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("default_cultivar");
      
    })
    .createTable("cultivars", (table) => {
      table.string("id").primary();
      table
        .string("plant_id")
        .references("plants.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("name").notNullable();
      table.string("description", 1000);
      table.string("sun").notNullable();
      table.string("frost_tolerance").notNullable();
      table.integer("maturity_in_days").notNullable();
      table.integer("footprint").notNullable();
      table.boolean("support");
      table.string("usda_zone").notNullable();
      
    })
    .createTable("planters", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.integer("height").notNullable().defaultTo(0);
      table.integer("width").notNullable().defaultTo(0);
      table.integer("length").notNullable().defaultTo(0);
      table.integer("radius").notNullable().defaultTo(0);
      table.boolean("round").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("planters").dropTable("cultivars").dropTable("plants").dropTable("types");
};
