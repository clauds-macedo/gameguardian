const express = require("express");
const generalController = require("../controllers/general_controller");

const router = express.Router();

router.get("/:platform/:page", generalController.fetchPrices);

module.exports = router;
