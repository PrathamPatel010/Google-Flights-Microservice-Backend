const axios = require('axios');
const { AUTHSERVICE_URL } = require("../config/serverConfig");

async function validateRequest(req,res,next){
    try{
        const response = await axios.get(`${AUTHSERVICE_URL}/api/v1/isAuthenticated`,{
            headers:{
                'x-access-token': req.headers['x-access-token']
            }
        });
        if(response.data.success){
            next();
        } else{
            return res.status(401).json({message:'Unauthorized'});
        }
    } catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }
}

module.exports = validateRequest;