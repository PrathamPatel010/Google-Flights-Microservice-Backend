const {Op} = require('sequelize');

const {Airport} = require('../models/index');

class AirportRepository{
    async createAirport({name,address,cityId}){ /* Destructuring Object like: {name:"Airport_name"}*/
        try{
            console.log({name,address,cityId});
            const airport = await Airport.create({name,address,cityId});
            return airport;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

    async deleteAirport(airportId){
        try{
            await Airport.destroy({
                where:{
                    id:airportId
                }
            });
            return true;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

    async updateAirport(airportId,data){
        try{
            // this approach works, but it won't return updated object
            // const airport = await Airport.update(data,{
            //     where:{
            //         id:airportId
            //     }
            // });

            // for getting updated data in mysql we use this way to return updated object
            const airport = await Airport.findByPk(airportId);
            airport.name = data?.name;
            airport.address = data?.address;
            await airport.save();
            return airport;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

    async getAirport(airportId){
        try{
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

    async getAllAirports(filter){ // this filter object can be empty
        try{
            if (!filter.name){
                const airports = await Airport.findAll();
                return airports;
            }
            const airports = await Airport.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name,
                    }
                }
            });
            return airports;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

    async createAirports(airports){     // here, airports is array of airport
        try{
            const res = await Airport.bulkCreate(airports);
            return res;
        } catch (err){
            console.log(`Something went wrong in AirportRepository layer`);
            throw {message:err};
        }
    }

}

module.exports = AirportRepository;