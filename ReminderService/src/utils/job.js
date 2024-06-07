const cron = require('node-cron');
const {fetchPendingEmails, sendBasicEmail} = require('../services/email-service');
const {EMAIL_ID} = require("../config/serverConfig");
// Every 5 minutes, we will check are there any pending emails which was expected to be sent by now
// and still pending
const setupJobs = () => {
    cron.schedule("*/1 * * * *",async()=>{
        const response = await fetchPendingEmails();
        response.forEach((email)=>{
            sendBasicEmail(
                EMAIL_ID,
                email.recipientEmail,
                email.subject,
                email.content,
            )
            console.log("Email sent", email.id);
        });
    });
}

module.exports = setupJobs;