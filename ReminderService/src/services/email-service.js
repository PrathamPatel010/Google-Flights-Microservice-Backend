const sender = require('../config/emailConfig');

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

module.exports = {sendBasicEmail}