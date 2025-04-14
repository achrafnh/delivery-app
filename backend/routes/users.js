const express = require("express");
const router = express.Router();
const { getProfile, getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

router.get("/me", authMiddleware, getProfile);
router.get("/", authMiddleware, getAllUsers);

module.exports = router;
