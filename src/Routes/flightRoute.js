const express = require('express');
const flightsController = require('../controller/flightsController');

const router = express.Router();
router.post('/create', flightsController.flight_create);
router.get('/showall', flightsController.flight_findall);
router.post('/createe', flightsController.flight_find);
router.post('/update/:id',flightsController.update_flight);
router.get('/flight_info/:id',flightsController.flight_info)
router.delete('/delete_flight/:id',flightsController.delete_flight)
router.get('/search', flightsController.flight_findall2)
module.exports = router;