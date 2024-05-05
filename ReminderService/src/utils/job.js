const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

/* 10:00 AM
*   Every 5 minute
*   We will check are there any pending emails which was expected to be sent
*   By now and is pending
*/

const setupJobs = () => {
    // running this job every minute
    cron.schedule("*/1 * * * *",async()=>{
        const response  = await emailService.fetchPendingEmails();
        response.forEach((email)=>{
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content,
            },async(err,data)=>{
                if (err){
                    console.log(err);
                } else{
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:"SUCCESS"});
                }
            })
        });
        console.log(response);
    });
}

module.exports = setupJobs;