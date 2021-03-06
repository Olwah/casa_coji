const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

// HOMEPAGE
router.get('/', viewsController.getHome);

// CATEGORIES
router.get('/accommodation', viewsController.getAccommodation);
router.get('/restaurant', viewsController.getRestaurant);
router.get('/climbing', viewsController.getClimbing);
router.get('/equipment', viewsController.getEquipment);
router.get('/activities', viewsController.getCoursesActivities);
router.get('/combos', viewsController.getCombos);
router.get('/admin', viewsController.getAdmin);

module.exports = router;