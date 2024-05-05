const TicketService = require('../services/email-service');

const create = async(req,res) => {
    try{
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            message:"Successfully registered an email reminder",
            err:{}
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            message:"Unable to register an email reminder",
            err:error
        });
    }
}

const getAll = async(req,res) => {
    try{
        const response = await TicketService.fetchPendingEmails();
        return res.status(201).json({
            success:true,
            data:response,
            message:"Successfully fetched all pending emails",
            err:{}
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            message:"Unable to fetch pending emails",
            err:error
        });
    }
}

module.exports = {create,getAll};