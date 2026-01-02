const {Flights}=require("../models/index");
const {Op}= require("sequelize");

class FlightRepository{
    #createFilter(data){
        let filter={};
        if (data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId)filter.departureAirportId=data.departureAirportId;
        if (data.minprice || data.maxprice) {
            filter.price = {};

        if (data.minprice) {
            filter.price[Op.gte] = data.minprice;
        }

        if (data.maxprice) {
            filter.price[Op.lte] = data.maxprice;
        }
}
        return filter; 
    
    }
    async createFlight(data){
        try{
            const flight= await Flights.create(data);
            return flight;
        }catch(error){
            console.log(error);
            throw{error};
        }
    }
    async getFlight(id){
        try{
            const flight= await Flights.findByPk(id);
            return flight;
        }catch(error){
            console.log(error);
            throw{error};
        }
    }
    async getAllFlights(filter){
        try{
            const FilterObject=await this.#createFilter(filter);
            const flight=await Flights.findAll(
                {where:FilterObject}
            );
            return flight;
        }catch(error){
            console.log(error);
            throw{error};
        }
    }

}
module.exports=FlightRepository;