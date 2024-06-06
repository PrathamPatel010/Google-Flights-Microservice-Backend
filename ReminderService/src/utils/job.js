const cron = require('node-cron');
const {fetchPendingEmails, sendBasicEmail} = require('../services/email-service');
// Every 5 minutes, we will check are there any pending emails which was expected to be sent by now
// and still pending
const setupJobs = () => {
    cron.schedule("*/1 * * * *",async()=>{
        const response = await fetchPendingEmails();
        response.forEach((email)=>{
            sendBasicEmail(
                "ppratham812@gmail.com",
                email.recipientEmail,
                email.subject,
                email.content,
            )
        })
        console.log("Emails sent");
    });
}

module.exports = setupJobs;