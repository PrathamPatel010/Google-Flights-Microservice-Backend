const {Op} = require('sequelize');
const {City} = require('../models/index');
const CrudRepository = require('../repository/crud-repository');

class CityRepository extends CrudRepository{

    constructor() {
        super(City);
    }

    async getAllCities(filter){ // this filter object can be empty
        try{
            if (!filter.name){
                const cities = await City.findAll();
                return cities;
            }
            const cities = await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name,
                    }
                }
            });
            return cities;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async createCities(cities){     // here, cities is array of cities
        try{
            const res = await City.bulkCreate(cities);
            return res;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async getAirports(cityId){
        try{
            const city = await City.findByPk(cityId);
            const airports = await city.getAirports();
            return airports;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

}

module.exports = CityRepository;