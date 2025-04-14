const express = require("express");
const router = express.Router();
const { updateLocation } = require("../controllers/driverController");
const auth = require("../middlewares/auth");

router.post("/location", auth, updateLocation);

module.exports = router;
