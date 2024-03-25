const {StatusCodes} = require('http-status-codes');

class AppErrors extends Error{
    constructor(name='AppError',
                message='Something went wrong',
                explanation=['Something went wrong'],
                statusCode) {
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppErrors;