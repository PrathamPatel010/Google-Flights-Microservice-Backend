const {ClientErrorCodes} = require('../utils/status-codes');

const validateCreateFlight = (req,res,next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any body params is missing, we can send bad request error.
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creating a flight',
            error: 'Missing mandatory properties to create a flight'
        });
    }

    next();
}

module.exports = {validateCreateFlight};