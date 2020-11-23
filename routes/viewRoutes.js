const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

// HOMEPAGE
router.get('/', viewsController.getHome);

// CATEGORIES
router.get('/rooms', viewsController.getRooms);
router.get('/food', viewsController.getFood);

module.exports = router;