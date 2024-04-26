const typesData = require('../seed-data/types');
const plantsData = require('../seed-data/plants');
const cultivarsData = require('../seed-data/cultivars');
const zonesData = require('../seed-data/zones');
const plantersData = require('../seed-data/planters');


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('types').del();
  await knex('plants').del();
  await knex('cultivars').del();
  await knex('zones').del();
  await knex('planters').del();

  await knex('types').insert(typesData);
  await knex('plants').insert(plantsData);
  await knex('cultivars').insert(cultivarsData);
  await knex('zones').insert(zonesData);
  await knex('planters').insert(plantersData);
};
