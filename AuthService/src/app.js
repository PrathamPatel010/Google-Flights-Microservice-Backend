const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const {User,Role} = require('./models/index');
const app = express();
const prepareAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async()=>{
        if (process.env.SYNC_DB){
            await db.sequelize.sync({alter:true});
        }
        console.log(`Auth Service is listening on port ${PORT}`);
        const user = await User.findByPk(2);
        // const role = await Role.findByPk(2);
        // user.addRole(role);
        // const response = await role.getUsers();
        const response = await user.hasRole(2);
        console.log(response);
    });
}

prepareAndStartServer();