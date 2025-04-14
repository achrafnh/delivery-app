/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *               restaurantId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created
 *
 * /orders/{id}/status:
 *   put:
 *     summary: Update order status
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 */

const express = require("express");
const router = express.Router();
const {  createOrder,
  updateOrderStatus,
  assignDriver,
  getOrders,
  getOrderById } = require("../controllers/orderController");
const auth = require("../middlewares/auth");

router.post("/", auth, createOrder);
router.put("/:id/status", auth, updateOrderStatus);
router.put("/:id/assign", auth, assignDriver); // <-- Ajouté
router.get("/", auth, getOrders);              // <-- Ajouté
router.get("/:id", auth, getOrderById);        // <-- Ajouté
module.exports = router;
