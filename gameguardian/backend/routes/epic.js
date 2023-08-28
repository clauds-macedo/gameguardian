const express = require("express");
const epicController = require("../controllers/epic_controller");

const router = express.Router();

router.get("/freeGames", epicController.fetchFreeGames);

module.exports = router;
