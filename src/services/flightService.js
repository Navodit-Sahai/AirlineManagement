const { FlightRepository, AirplaneRepository } = require('../repositories/index');
const {compareTime} = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            let arrTime=data.arrivalTime;
            let depTime=data.departureTime;
            if (compareTime(depTime, arrTime)) {
                throw new Error("Arrival time must be after departure time");
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneID);
            

            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.log("something went wrong in FlightService");
            throw error;
        }
    }
    async getFlight(id){
        try{
            const flight=await this.flightRepository.getFlight(id);
            return flight;
        }catch (error) {
            console.log("something went wrong in FlightService");
            throw error;
        }
    }
    async getAllFligthData(data){
        try{
            const flights=await this.flightRepository.getAllFlights(data);
            return flights;
        }catch (error) {
            console.log("something went wrong in FlightService");
            throw error;
        }
    }
    async updateFlight(id,data){
        try{
            await this.flightRepository.updateFlight(id,data);
            return true;
        }
        catch(error){
            console.log("something went wrong in FlightService");
            throw error;
        }
    }
}

module.exports = FlightService;
