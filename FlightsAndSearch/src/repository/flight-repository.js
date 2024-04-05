const {Flight} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if We have both minPrice and maxPrice filter, apply AND operator
        if (data.minPrice && data.maxPrice) {
            filter = {...filter,
                [Op.and]: [
                    {price: {[Op.gte]: data.minPrice}},
                    {price: {[Op.lte]: data.maxPrice}},
                ]
            }
            // Another approach: Object.assign(filter,{
            //     [Op.and]:[
            //         {price: {[Op.gte]:data.minPrice}},
            //         {price: {[Op.lte]:data.maxPrice}}
            //     ]
            // });

            // and we can return filter from here.
            return filter;
        }

        // else we can apply filters separately and then return filter
        if (data.minPrice){
            filter = {...filter,price:{[Op.gte]:data.minPrice}}
            // Another approach : Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }
        if (data.maxPrice){
            filter = {...filter,price:{[Op.lte]:data.maxPrice}}
            // Another approach: Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        } catch (error){
            console.log("Something went wrong in flight repository layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try{
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where:filterObject
            });
            return flights;
        } catch (error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try{
            await Flight.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
        } catch (error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;