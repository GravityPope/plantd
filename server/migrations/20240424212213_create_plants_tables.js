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
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("default_cultivar");
      table
        .string("type_id")
        .references("types.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("cultivars", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("description");
      table.string("sun").notNullable();
      table.string("frost_tolerance").notNullable();
      table.integer("footprint").notNullable();
      table.boolean("support");
      table
        .string("plant_id")
        .references("plants.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("zones", (table) => {
      table.string("id").primary();
      table.string("usda_zone").notNullable();
      table
        .string("cultivar_id")
        .references("cultivars.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
    return knex.schema.dropTable("planters").dropTable("zones").dropTable("cultivars").dropTable("plants").dropTable("types");
};
