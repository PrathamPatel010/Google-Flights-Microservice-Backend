const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const app = express();
const prepareAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,()=>{
        console.log(`Auth Service is listening on port ${PORT}`);
    });
}

prepareAndStartServer();