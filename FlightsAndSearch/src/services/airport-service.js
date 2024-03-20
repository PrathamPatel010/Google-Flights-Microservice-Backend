const {AirportRepository} = require('../repository/index');

class AirportService{
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data){
        try{
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }

    async updateAirport(airportId,data){
        try{
            const airport = await this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }

    async deleteAirport(airportId){
        try{
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }

    async getAirport(airportId){
        try{
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }

    async getAllAirports(filter){     // filter can be empty
        try{
            const airports = await this.airportRepository.getAllAirports({name:filter.name});
            return airports;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }

    async createAirports(data){
        try{
            const airports = await this.airportRepository.createAirports(data);
            return airports;
        } catch (err){
            console.log(`Something went wrong in service layer in airport-service`);
            throw {message:err.message};
        }
    }
}

module.exports = AirportService;