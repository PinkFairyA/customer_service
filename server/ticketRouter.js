const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const workFactor = 12;

const ticketController = require('./database/controller.js');

router.post('/login',
  ticketController.postUsernameAndPassword,
  (req, res) => res.status(200).json(res.locals.userStatus)
);

router.get('/getTickets/:id',
  ticketController.getCustomer,
  (req, res) => res.status(200).json(res.locals.customer)
);

router.get('/getTickets',
  ticketController.getTicket,
  (req, res) => {
    return res.status(200).json(res.locals.ticket)}
);



// router
//   .route('/')
//   .get((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//     const db = req.app.get('db');
//     TicketService.getAllTickets(db).then((data) => {
//       console.log(
//         '🔴🟠🟡🟢🔵🟣 | file: ticket.js | line 10 | TicketService.getAllTickets | data',
//         data
//       );
//       return res.status(200).send(data);
//     });
//   })
//   .post((req, res) => {
//     const db = req.app.get('db');
//     TicketService.insertTicket(db, req.body).then((data) => {
//       res.send(data);
//     });
//   });

// router
//   .route('/:id')
//   .get((req, res, next) => {
//     const db = req.app.get('db');
//     TicketService.getById(db, req.params.id).then((data) => {
//       res.send(data);
//     });
//   })
//   .patch((req, res) => {
//     const db = req.app.get('db');
//     TicketService.updateTicket(db, req.params.id, req.body).then(() => {
//       res.status(204).end();
//     });
//   })
//   .delete((req, res) => {
//     const db = req.app.get('db');
//     TicketService.deleteTicket(db, req.params.id).then((data) => {
//       res.status(204).end();
//     });
//   });

// Getting login page information 
// router.get('/',
//   ticketController.getCustomer, 
//   (req, res) => res.status(200).json(res.locals.customer)
// );




module.exports = router;
