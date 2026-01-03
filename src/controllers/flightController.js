const { flightService } = require('../services/index');
const {ClientErrors,ServerErrors,SuccesCodes}=require("../utils/error-codes");
const FlightService = new flightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneID: req.body.airplaneID,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };
        const flight = await FlightService.createFlight(flightRequestData);
        return res.status(SuccesCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created the flight",
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to create the flight",
            err: error.message
        });
    }
};
const get=async (req,res)=>{
    try{
        const flight=await FlightService.getFlight(req.params.id);
        return res.status(SuccesCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully got the flight",
            err: {}
        });
    }catch (error) {
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to get the flight",
            err: error.message
        });
    }
}
const getAllFlights=async(req,res)=>{
    try{
        const flights=await FlightService.getAllFligthData(req.query);
        return res.status(SuccesCodes.OK).json({
            data: flights,
            success: true,
            message: "Successfully fetched the flights",
            err: {}
        });
    }catch (error) {
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch the flight",
            err: error.message
        });
    }
}

module.exports={
    create,
    get,
    getAllFlights
}