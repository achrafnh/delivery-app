const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get('/', async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

router.post('/', async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json(restaurant);
});

module.exports = router;
