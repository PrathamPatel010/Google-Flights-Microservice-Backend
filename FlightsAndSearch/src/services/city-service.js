const {CityRepository} = require('../repository/index');

class CityService{
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }

    async getAllCities(){
        try{
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (err){
            console.log(`Something went wrong in service layer in city-service`);
            throw {message:err.message};
        }
    }
}

module.exports = CityService;