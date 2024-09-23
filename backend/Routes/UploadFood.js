

const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Route to insert a new food item
router.post('/upload', async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json({ success: true, data: newFood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to insert food item' });
  }
});

module.exports = router;
