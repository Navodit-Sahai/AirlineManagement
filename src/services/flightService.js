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
}

module.exports = FlightService;
