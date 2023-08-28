const express = require("express");
const steamController = require("../controllers/steam_controller");

const router = express.Router();

router.get("/:page", steamController.fetchPrices);

module.exports = router;
