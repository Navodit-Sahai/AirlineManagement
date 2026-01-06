const express=require("express");
const CityController=require('../../controllers/cityController');
const FlightController=require('../../controllers/flightController');
const AirportController=require('../../controllers/airport-Controller');

const {FlightMiddlewares}=require('../../middlewares/index');

const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);


router.post(
    '/flight',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flight/:id',FlightController.get);
router.get('/flights',FlightController.getAllFlights);
router.patch('/flight/:id',FlightController.update);

router.post('/airport',AirportController.create);
module.exports=router;