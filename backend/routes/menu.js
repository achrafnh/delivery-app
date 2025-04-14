const express = require("express");
const router = express.Router();
const { getMenuByRestaurant } = require("../controllers/menuController");

router.get("/:id/menu", getMenuByRestaurant);

module.exports = router;
