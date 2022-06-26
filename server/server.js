const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const ticketRouter = require('./ticketRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '/public/')));



// ! These commented lines are for database access using knex with MySQL


const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '23.235.206.125',
    port: 3306,
    user: 'jimtermini_customer',
    password: 'MySup3rS3cr3tPassw0rd',
    database: 'jimtermini_SoloProject',
  },
});



// const db = require('knex')({
//   client: 'ps',
//   connection: {
//     host: '',
//     port: 000,
//     user: '',
//     password: '',
//     database: '',
//   },
// });

app.set('db', db);

app.use('/ticketRouter', ticketRouter);

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

module.exports = app;
