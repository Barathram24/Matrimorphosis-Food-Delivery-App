const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/restaurants.json');

// Route to get all restaurants
router.get('/restaurants', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    const restaurants = JSON.parse(jsonData);
    res.json(restaurants);
  });
});

// Route to get menu for a specific restaurant by ID
router.get('/menus/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    const restaurants = JSON.parse(jsonData);
    const restaurant = restaurants.find(r => r.id === id);
    if (restaurant) {
      res.json(restaurant.menu);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  });
});

module.exports = router;
