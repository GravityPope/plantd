const router = require("express").Router();
const plantsController = require("../controllers/plants-controller");

//Routes
router.route("/plants")
    .get(plantsController.getPlants);

router.route("/plants/:id")
    .get(plantsController.getPlantById);

router.route("/cultivars/:id")
    .get(plantsController.getCultivar);

router.route("/planters")
    .get(plantsController.getPlanters)





module.exports = router;