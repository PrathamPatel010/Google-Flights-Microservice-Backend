const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const app = express();
const setupAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Booking Service is listening on port ${PORT}`);
        if (process.env.DB_SYNC){
            await db.sequelize.sync();
        }
    });
}

setupAndStartServer();