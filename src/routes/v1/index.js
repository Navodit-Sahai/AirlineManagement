const express=require("express");
const CityController=require('../../controllers/cityController');
const FlightController=require('../../controllers/flightController');


const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);


router.post('/flight',FlightController.create);
router.get('/flight/:id',FlightController.get);
router.get('/flights',FlightController.getAllFlights);
module.exports=router;