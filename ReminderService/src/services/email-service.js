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

const fetchPendingEmails = async (timestamp) => {
    try{
        const repo = new TicketRepository();
        const response = await repo.getAll();
        return response;
    } catch (error){
        console.log(error.message);
        throw error;
    }
}

module.exports = {sendBasicEmail,fetchPendingEmails}