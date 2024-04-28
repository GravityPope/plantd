const knex = require("knex")(require("../knexfile"));

// Controllers
const getPlants = async (_req, res) => {
    try {
        const plants = await knex
        .from("plants")
        .select(
            {"type_id":"plants.type_id",
            "plant_id":"plants.id",
            "type":"types.name",
            "plant_name":"plants.name",
            "plant_description":"plants.description"}
        )
        .join("types", {
            "plants.type_id":"types.id"
        });
        res.status(200).json(plants)
        
    } catch (error) {
        console.log(error);
    res.status(500).json({
      message: "Unable to retrive Plants",
    });
    }
}





module.exports = {
    getPlants
}