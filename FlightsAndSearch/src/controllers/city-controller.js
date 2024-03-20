const {CityService} = require('../services/index');

const cityService = new CityService();

// POST -> data is in req.body
const create = async(req,res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(200).json({
            data: city,
            success:true,
            message: "City created successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "City not able to create",
            err: err.message,
        });
    }
}

// DELETE -> /city/:id
const destroy = async(req,res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: "City successfully deleted",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "not able to delete the city",
            err: err.message,
        });
    }
}


// GET -> /city/:id
const get = async(req,res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: "City retrieved successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to get the city",
            err: err.message,
        });
    }
}


// PATCH -> /city/:id -> req.body
const update = async(req,res) => {
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: "City updated successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to update the city",
            err: err.message,
        });
    }
}

const getAll = async(req,res) => {
    try{
        const cities = await cityService.getAllCities(req.query);   // req.query will have filtration data
        return res.status(200).json({
            data: cities,
            success:true,
            message: `${cities.length} Cities fetched successfully`,
            err: {},
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            data: {},
            success:false,
            message: "Not able to fetch cities",
            err:err
        });
    }
}

const createMultiple = async(req,res) => {
    try{
        const cities = await cityService.createCities(req.body);
        return res.status(200).json({
            data: cities,
            success:true,
            message: "Cities created successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Cities not able to create",
            err: err.message,
        });
    }
};

const getAirports = async(req,res) => {
    try{
        const airports = await cityService.getAirports(req.params);
        return res.status(200).json({
            data: airports,
            success:true,
            message: `${airports.length} ${airports.length>1 ? 'Airports' : 'Airport'} fetched successfully`,
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Airports not able to be fetched",
            err: err.message,
        });
    }
}
module.exports = {create,createMultiple,destroy,get,update,getAll,getAirports};

