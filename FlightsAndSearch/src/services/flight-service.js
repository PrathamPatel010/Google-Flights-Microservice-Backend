const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper-funcs');

class FlightService{

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        // Here's what we expect in data
        /* {flightNumber,airplaneId,departureId,arrivalAirportId,arrivalTime,departureTime,price} */
        try{
            if (!compareTime(data.arrivalTime,data.departureTime)){
                throw {error:"Arrival time cannot be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight(
                {...data,totalSeats: airplane.capacity}
            );
            return flight;
        } catch (error){
            console.log("Something went wrong in flight-service layer");
            throw error;
        }
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error){
            console.log("Something went wrong in flight-service layer");
            throw error;
        }
    }

    async getFlight(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error){
            console.log("Something went wrong in flight-service layer");
            throw error;
        }
    }

}

module.exports = FlightService;