/**
 * @swagger
 * /drivers/location:
 *   post:
 *     summary: Update driver location
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *     responses:
 *       200:
 *         description: Location updated
 */

const express = require("express");
const router = express.Router();
const { updateLocation } = require("../controllers/driverController");
const auth = require("../middlewares/auth");

router.post("/location", auth, updateLocation);

module.exports = router;
