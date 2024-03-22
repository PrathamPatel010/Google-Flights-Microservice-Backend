const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success:true,
            message: "Flight created successfully",
            error: {},
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to create a flight",
            error: error,
        });
    }
}

const getAll = async(req,res)=> {
    try{
        console.log(req.query);
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success:true,
            message: `${flights.length} ${flights.length>1 ? 'Flights' : 'Flight'} fetched successfully`,
            error: {},
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message: "Not able to fetch flights",
            error: error,
        });
    }
}

module.exports = {create,getAll};