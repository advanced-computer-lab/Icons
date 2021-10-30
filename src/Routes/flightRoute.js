const express = require('express');
const flightsController = require('../controller/flightsController');

const router = express.Router();
router.post('/create', flightsController.flight_create);
router.get('/showall', flightsController.flight_findall);
router.get('/search', flightsController.flight_find);
// router.get('/update/:id', userController.user_update);

module.exports = router;