const {CityRepository} = require('../repository/index');
const CrudService= require('../services/crud-service');

class CityService extends CrudService{
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }

    async getAllCities(filter){     // filter can be empty
        try{
            const cityRepository = new CityRepository();
            const cities = await cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async createCities(data){
        try{
            const cityRepository = new CityRepository();
            const cities = await cityRepository.createCities(data);
            return cities;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async getAirports({cityId}){    // destructuring city ID from the object
        try{
            const cityRepository = new CityRepository();
            const airports = await cityRepository.getAirports(cityId);
            return airports;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }
}

module.exports = CityService;