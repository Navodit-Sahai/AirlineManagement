const {ClientErrors,ServerErrors,SuccesCodes}= require("../utils/error-codes");

const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber||
        !req.body.airplaneID ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            success:false,
            message:"Invalid request body to create Flight",
            err:"Missing madatory properties to create the flight"
        });
    }
    next(); 
}
module.exports={
    validateCreateFlight
};