const cron = require('node-cron');
const {fetchPendingEmails} = require('../services/email-service');
// Every 5 minutes, we will check are there any pending emails which was expected to be sent by now
// and still pending
const setupJobs = () => {
    cron.schedule("*/1 * * * *",async()=>{
        const response = await fetchPendingEmails(Date.now());
        console.log(response);
    })
}

module.exports = setupJobs;