const { FlightRepository, AirplaneRepository } = require('../repositories/index');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
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
