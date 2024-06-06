const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const sendBasicEmail = async(mailFrom,mailTo,mailSubject,mailBody) => {
    try{
        const res = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
        });
        return res;
    } catch (error){
        console.log(error.message);
        throw error;
    }
}

const fetchPendingEmails = async () => {
    try{
        const repo = new TicketRepository();
        const response = await repo.get({status:"PENDING"});
        return response;
    } catch (error){
        console.log(error.message);
        throw error;
    }
}

const createNotificationTicket = async (data) => {
    try{
        const repo = new TicketRepository();
        const ticket = await repo.create(data);
        return ticket;
    } catch (error){
        console.log("Error in Service layer: ",error.message);
        throw error;
    }
}

module.exports = {sendBasicEmail,fetchPendingEmails,createNotificationTicket};