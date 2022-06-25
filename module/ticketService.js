const TicketService = {
  getAllTickets(db) {
    // return db.select("description").from("TicketDets");
    return db.select("*").from("TicketDets");
  },
  insertTicket(db, newTicket) {
    return db
      .insert(newTicket)
      .into("TicketDets")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  getById(db, id) {
    return db.from("TicketDets").select("*").where("id_Ticket", id).first();
  },
  deleteTicket(db, id) {
    return db("TicketDets").where({ id }).delete();
  },
  updateTicket(db, id, ticketFields) {
    return db("TicketDets").where({ id }).update(ticketFields);
  },
};

module.exports = TicketService;
