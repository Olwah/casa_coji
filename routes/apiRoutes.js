const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// CATEGORIES
router
    .route('/accommodation')
    //.get(adminController.getAllAccomodation)
    .post(adminController.createAccomodation)
    //.patch(adminController.updateAccomodation)
    //.delete(adminController.deleteAccomodation);

module.exports = router;
