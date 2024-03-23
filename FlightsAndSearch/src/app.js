const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>{
        console.log(`FlightsAndSearch Service is listening on port ${PORT}`);
    });
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
}

setupAndStartServer();