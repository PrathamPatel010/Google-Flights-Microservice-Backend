const cron = require('node-cron');
const {fetchPendingEmails, sendBasicEmail, updateTicketStats} = require('../services/email-service');
const {EMAIL_ID} = require("../config/serverConfig");

// Every 15 minutes, we will check are there any pending emails which was expected to be sent by now
// and still pending
const setupJobs = () => {
    try{
        cron.schedule("*/15 * * * *",async()=>{
            const response = await fetchPendingEmails();
            for (const email of response) {
                await sendBasicEmail(
                    EMAIL_ID,
                    email.recipientEmail,
                    email.subject,
                    email.content,
                )
                await updateTicketStats(email.id,{status:"SUCCESS"});
            }
        });
    } catch (error){
        console.log(error);
        throw error;
    }
}

module.exports = setupJobs;