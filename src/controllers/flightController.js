const { flightService } = require('../services/index');

const FlightService = new flightService();

const create = async (req, res) => {
    try {
        const flight = await FlightService.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Successfully created the flight",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
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
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Successfully got the flight",
            err: {}
        });
    }catch (error) {
        return res.status(500).json({
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
        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully fetched the flights",
            err: {}
        });
    }catch (error) {
        return res.status(500).json({
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