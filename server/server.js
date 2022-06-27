const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const ticketRouter = require('./ticketRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '/public/')));
app.use('/ticketRouter', ticketRouter);



// ! These commented lines are for database access using knex with MySQL
// ! Plese don't delete (I'd them in place for after project)

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



// Get request to respond with main ticket page(?). - IB
// Home ticket page would go after __dirname
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../'))
});


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
