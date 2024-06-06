const {NotificationTicket} = require('../models/index');

class TicketRepository{

    async getAll(){
        try{
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = TicketRepository;