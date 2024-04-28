const knex = require("knex")(require("../knexfile"));

// Controllers
const getPlants = async (_req, res) => {
  try {
    const response = await knex
      .from("plants")
      .select({
        type_id: "plants.type_id",
        plant_id: "plants.id",
        type: "types.name",
        plant_name: "plants.name",
        plant_description: "plants.description",
      })
      .join("types", {
        "plants.type_id": "types.id",
      });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Unable to retrive Plants",
    });
  }
};

const getPlantById = async (req, res) => {
  const { id } = req.params;
  try {
    const plants = await knex
      .from("plants")
      .select({
        type_id: "plants.type_id",
        plant_id: "plants.id",
        type: "types.name",
        plant_name: "plants.name",
        plant_description: "plants.description",
      })
      .join("types", {
        "plants.type_id": "types.id",
      })
      .where({ "plants.id": id })
      .first();
    const cultivarsList = await knex
      .from("cultivars")
      .select("id", "name", "description", "maturity_in_days")
      .where({ plant_id: id });

    const response = { ...plants, cultivars: cultivarsList };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Unable to retrive Plants",
    });
  }
};

const getCultivar = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await knex
      .from("cultivars")
      .select(
        "id",
        "plant_id",
        "name",
        "description",
        "sun",
        "frost_tolerance",
        "maturity_in_days",
        "footprint",
        "support",
        "usda_zone"
      )
      .where({ id })
      .first();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Unable to retrive Plants",
    });
  }
};

const getPlanters = async (_req, res) => {
    try {
        const response = await knex("planters");

        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
    res.status(500).json({
      message: "Unable to retrive Planters",
    });
        
    }
}

module.exports = {
  getPlants,
  getPlantById,
  getCultivar,
  getPlanters
};
