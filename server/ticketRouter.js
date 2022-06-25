const express = require('express');
const router = express.Router();
const TicketService = require('../module/ticketService.js');

router
  .route('/')
  .get((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    const db = req.app.get('db');
    TicketService.getAllTickets(db).then((data) => {
      console.log(
        '🔴🟠🟡🟢🔵🟣 | file: ticket.js | line 10 | TicketService.getAllTickets | data',
        data
      );
      return res.status(200).send(data);
    });
  })
  .post((req, res) => {
    const db = req.app.get('db');
    TicketService.insertTicket(db, req.body).then((data) => {
      res.send(data);
    });
  });

router
  .route('/:id')
  .get((req, res, next) => {
    const db = req.app.get('db');
    TicketService.getById(db, req.params.id).then((data) => {
      res.send(data);
    });
  })
  .patch((req, res) => {
    const db = req.app.get('db');
    TicketService.updateTicket(db, req.params.id, req.body).then(() => {
      res.status(204).end();
    });
  })
  .delete((req, res) => {
    const db = req.app.get('db');
    TicketService.deleteTicket(db, req.params.id).then((data) => {
      res.status(204).end();
    });
  });

module.exports = router;
