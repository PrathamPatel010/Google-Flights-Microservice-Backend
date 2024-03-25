const AppErrors = require('./error-handler');
const {StatusCodes} = require("http-status-codes");

class UniqueConstraintError extends AppErrors{
    constructor(error) {
        let errorName = error.name;
        let message = 'User already exist in the database'
        let explanation = [];
        error.errors.forEach((error)=>{
            explanation.push(error.message);
        });
        super(
            errorName,message,explanation,StatusCodes.CONFLICT
        );
    }
}

module.exports = UniqueConstraintError;