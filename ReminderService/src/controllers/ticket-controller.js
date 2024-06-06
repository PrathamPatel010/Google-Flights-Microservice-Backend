const NotificationService = require('../services/email-service');

const create = async(req,res)=> {
    try{
        const response = await NotificationService.createNotificationTicket(req.body);
        return res.status(201).json({
            message: 'Email reminder setup successfully',
            success: true,
            data: response,
            error: {}
        });
    } catch (error){
        console.log("Error in Controller layer: ",error.message);
        console.log(error.message);
        return res.status(500).json({
            message: error.message,
            success: false,
            data: {},
            error: error.explanation
        });
    }
}

module.exports = {create};