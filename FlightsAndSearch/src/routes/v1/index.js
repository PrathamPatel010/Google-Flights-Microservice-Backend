const express = require('express');
const {CityController,AirportController,FlightController} = require('../../controllers/index');

const router = express.Router();

router.post('/city',CityController.create);
router.post('/city/bulk',CityController.createMultiple);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.get('/city/airports/:cityId',CityController.getAirports);

router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport/:id',AirportController.get);
router.get('/airport',AirportController.getAll);
router.patch('/airport/:id',AirportController.update);

router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);
module.exports = router;