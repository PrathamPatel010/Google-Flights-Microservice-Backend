const AppErrors = require('./error-handler');
const {StatusCodes} = require("http-status-codes");

class ValidationError extends AppErrors{
    constructor(error) {
        let errorName = error.name;
        let message = 'Not able to validate data sent'
        let explanation = [];
        error.errors.forEach((error)=>{
            explanation.push(error.message);
        });
        super(
            errorName,message,explanation,StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError;