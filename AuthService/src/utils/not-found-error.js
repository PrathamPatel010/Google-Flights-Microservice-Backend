const {StatusCodes} = require('http-status-codes');
const AppErrors = require("./error-handler");

class NotFoundError extends AppErrors{
    constructor(error) {
        let errorName = "NotFoundError";
        let message = error.message;
        let explanation = error.explanation;
        super(
            errorName,message,explanation,StatusCodes.NOT_FOUND
        );
    }
}

module.exports = NotFoundError;