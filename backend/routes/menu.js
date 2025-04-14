/**
 * @swagger
 * /menu/{id}/menu:
 *   get:
 *     summary: Get menu items by restaurant ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of menu items
 */

const express = require("express");
const router = express.Router();
const { getMenuByRestaurant } = require("../controllers/menuController");

router.get("/:id/menu", getMenuByRestaurant);

module.exports = router;
