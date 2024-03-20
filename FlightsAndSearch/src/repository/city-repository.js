const {Op} = require('sequelize');

const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){ /* Destructuring Object like: {name:"Ahmedabad"}*/
        try{
            const city = await City.create({name});
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async updateCity(cityId,data){
        try{
            // this approach works, but it won't return updated object
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });

            // for getting updated data in mysqlso, we use this way to return updated object
            const city = await City.findByPk(cityId);
            city.name = data?.name;
            await city.save();
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (err){
            console.log(`Something went wrong in CityRepository layer`);
            throw {message:err};
        }
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