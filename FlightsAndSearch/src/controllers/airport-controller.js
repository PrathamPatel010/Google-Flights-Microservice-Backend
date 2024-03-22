const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async(req,res) => {
    try{
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success:true,
            message: "Airport created successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to create Airport",
            err: err.message,
        });
    }
}

const destroy = async(req,res) => {
    try{
        const response = await airportService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: "Airport successfully deleted",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "not able to delete the airport",
            err: err.message,
        });
    }
}


// GET -> /airport/:id
const get = async(req,res) => {
    try{
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: "Airport retrieved successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to get the airport",
            err: err.message,
        });
    }
}


// PATCH -> /airport/:id -> req.body
const update = async(req,res) => {
    try{
        const response = await airportService.update(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: "Airport updated successfully",
            err: {},
        });
    } catch (err){
        console.log(`${err.message}`);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to update the airport",
            err: err.message,
        });
    }
}

const getAll = async(req,res) => {
    try{
        const airports = await airportService.getAll();
        return res.status(200).json({
            data: airports,
            success:true,
            message: `${airports.length} Airports fetched successfully`,
            err: {},
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            data: {},
            success:false,
            message: "Not able to fetch airports",
            err:err
        });
    }
}

module.exports = {create,destroy,get,update,getAll};

