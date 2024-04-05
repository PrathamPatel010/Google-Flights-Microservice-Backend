const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_SYNC: process.env.PORT,
    FLIGHT_SERVICE_URL: process.env.FLIGHT_SERVICE_URL,
}