const express = require('express');
const {PORT} = require('./config/serverConfig');
const setupJobs = require("./utils/job");

const app = express();
const setupAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
        console.log(`Reminder Service is listening on port ${PORT}`);
        setupJobs();
    });
}

setupAndStartServer();