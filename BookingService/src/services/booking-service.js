const {BookingRepository} = require('../repository/index');
const {FLIGHT_SERVICE_URL} = require('../config/serverConfig');
const {ServiceError} = require("../utils/errors");
const axios = require("axios");

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try{
            // retrieve the flight info from flightsSearch using flightId
            const flightId = data.flightId;
            const requestURL = `${FLIGHT_SERVICE_URL}/api/v1/flights/${flightId}`;
            const flightInfo = await axios.get(requestURL);
            const flightData = flightInfo.data.data;

            // check if seats are available
            if (data.noOfSeats > flightData.totalSeats) {
                throw new ServiceError('Something went wrong','Insufficient seats in flight');
            }

            // compute the total cost based on no of seats
            let priceOfFlight = flightData.price;
            const totalCost = priceOfFlight * data.noOfSeats;

            // create the payload to send to repository for creating new booking
            const bookingPayload = {...data,totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);

            // update no of seats left in flights table
            const updateFlightRequestURL = `${FLIGHT_SERVICE_URL}/api/v1/flights/${flightId}`;
            await axios.patch(updateFlightRequestURL,{
                totalSeats: flightData.totalSeats - booking.noOfSeats
            });

            // update the status of flight booking
            const finalBooking = await this.bookingRepository.update({status:'Booked'},booking.id);

            return finalBooking;
        } catch (error){
            if (error.name==='RepositoryError' || error.name==='ValidationError') {throw error;}
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;