const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const ticketRouter = require('./ticketRouter.js');
const ticketController = require('./database/controller.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/getTickets/:id',
  ticketController.getCustomer,
  (req, res) => res.status(200).json(res.locals.customer)
);

app.use('/', ticketRouter);

// Get request to respond with main ticket page(?). - IB
// Home ticket page would go after __dirname
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../'))
// });
// app.get('/', (req, res) => {
//   return res.status(200).json('OK!')
// });



// catch-all route handler for unknown route requests. - IB
app.use((req, res, next) => {
  res.status(404).send('Sorry, cannot find that!');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// const db = require('knex')({
//   client: 'mysql2',
//   connection: {
//     host: '23.235.206.125',
//     port: 3306,
//     user: 'jimtermini_customer',
//     password: 'MySup3rS3cr3tPassw0rd',
//     database: 'jimtermini_SoloProject',
//   },
// });

// app.set('db', db);

module.exports = app;
