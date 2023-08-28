const express = require("express");
const steamController = require("../controllers/steamController");

const router = express.Router();

router.get("/:platform/:page", steamController.fetchPrices);

module.exports = router;
