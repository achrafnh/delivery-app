/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get current user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user profile
 *       401:
 *         description: Unauthorized
 */
 
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 */

const express = require("express");
const router = express.Router();
const { getProfile, getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

router.get("/me", authMiddleware, getProfile);
router.get("/", authMiddleware, getAllUsers);

module.exports = router;
