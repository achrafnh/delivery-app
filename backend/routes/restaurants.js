/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: List of restaurants
 */

const express = require("express");
const router = express.Router();
const { getRestaurants } = require("../controllers/restaurantController");

router.get("/", getRestaurants);

module.exports = router;
