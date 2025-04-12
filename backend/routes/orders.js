const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('restaurant customer driver');
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
});

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(order);
});

module.exports = router;
