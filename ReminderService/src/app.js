const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/job');
const ApiRoutes = require('../src/routes/v1/index');

const setupAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api/v1',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Reminder Service is listening on port ${PORT}`);
        jobs();
    });
}

setupAndStartServer();