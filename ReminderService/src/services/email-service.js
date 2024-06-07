const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const { join} = require("path");
const {readFileSync} = require("fs");
require('dotenv').config();
const EMAIL_TEMPLATE = process.env.EMAIL_TEMPLATE;
const sendBasicEmail = async(mailFrom,mailTo,mailSubject,mailBody) => {
    try{
        const templatePath = join(__dirname, '../','utils/emailTemplate.html');
        let htmlTemplate = readFileSync(templatePath, 'utf8');

        // Replace placeholders in the template
        htmlTemplate = htmlTemplate.replace('[Recipient\'s Name]', mailTo);
        htmlTemplate = htmlTemplate.replace('[Content]', mailBody);
        console.log(htmlTemplate);
        const res = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            html: htmlTemplate,
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