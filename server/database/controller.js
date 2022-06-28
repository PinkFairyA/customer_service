const db = require('./db.js');

const ticketController = {};


// for handling backend data, populate with fake data (couple rows) or use faker
// INSERT INTO table_name (column_name1, column_name2, ...) VALUES (value1, value2)


// Login Page
// Middleware function to get login credentials
// maybe this needs to be done after authentication??

ticketController.postUsernameAndPassword = (req, res, next) => {
    const { username, password } = req.body;
    // declare a variable called search and set it equal to the username column in the user_login table
    // include WHERE in the SQL query as opposed to just pulling ALL the data from all columns
    console.log(req.body);
    const search = `SELECT *
    FROM (
        SELECT username, password, 'Rep' person_type
        FROM rep_login
        
        UNION
        
        SELECT username, password, 'Customer' person_type
        FROM user_login) t
    WHERE t.USERNAME = $1`;
    // pass an array into db.query labeled params
    const params = [ username ];
      // pass SQL query defined in search and params array into db.query
      db.query(search, params)
        .then(data => {
        if (data.rows.length !== 0) {
            if (data.rows[0].password === password) {
            res.locals.userStatus = data.rows[0].person_type;
            return next();
        }
        else {
            res.locals.userStatus = 'Fail'
            return next();
        }}
        else {
            res.locals.userStatus = 'Username does not exist.'
            return next();
        }
    })
};

// Home Ticket Page 
// Middleware function to get all tickets
// Ticket information found in Ticket table in ElephantSQL


// Page After Clicking Ticket Page 

// Components: 
// Customer Detail component (Top Left of Excalidraw): Name, Address, Phone and E-mail 
// from users table: first-name, last_name, street_address, phone, email
ticketController.getCustomer = (req, res, next) => {
  // most likely going to use req.body, but have to communicate that with whoever is working on what page (i.e. home page or login page)
  // const { first_name, last_name, street_address, phone, email } = req.body;
  // include WHERE in the SQL query as opposed to just pulling ALL the data from all columns

  // Want the WHERE condition to be where user.id = ticket.user_id based on current ticketID displayed.
  // join in ticket table. then filter user by ticket.
  // distinct in select statement. - only returns distinct rows.

  const text = `SELECT DISTINCT u.first_name, u.last_name, u.street_address, u.phone, u.email 
    FROM users u 
    INNER JOIN ticket t ON u.id = t.user_id
    WHERE t.id = $1`;

  // setting up customer history
  // table with all tickets from a single user id
  /* WITH userInfo AS (
        SELECT user_id from ticket t where t.id = $1
    )
    SELECT *
        FROM ticket t 
        INNER JOIN user_info ui on t.user_id = ui.user_id
    ) */
  const history = `WITH userInfo AS (SELECT user_id FROM ticket t WHERE t.id = $1) 
    SELECT t.* 
    FROM ticket t 
    INNER JOIN userInfo ui on t.user_id = ui.user_id`;
  res.locals.customer = {};
  console.log(req.params.id);
  db.query(text, [req.params.id])
    .then((data) => {
      console.log('🔴🟠🟡🟢🔵🟣 | file: controller.js | line 90 | data', data);
      res.locals.customer['user_data'] = data.rows;
      db.query(history, [req.params.id])
        .then((data2) => {
          res.locals.custmer['ticket_data'] = data2.rows;
          return next();
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
  //   Promise.all(db.query(text, [req.params.id]), db.query(history, [req.params.id]))
  //     .then((data) => {
  //       console.log(data);
  //       res.locals.customer.push(data);

  //       next();
  //     })
  //     .catch((err) => {
  //       next({message: {err: 'Error in getCustomer middleware function.'}});
  //     });
}

// Ticket Note component 


// Ticket Detail component: has Ticket ID and ticket Body
// Need to pull Ticket ID and ticket body from tickets table where Ticket ID = what was clicked from home page. 
ticketController.getTicket = (req, res, next) => {
    // const { id, user_id, ticket_reason, ticket_note, ticket_status, submit_tmstmp, close_tmstmp  } = req.body;
    // Need to grab id from req.body(?)
    // id comes from clicking a ticket from main page. 
    const text = `SELECT t.id, t.ticket_reason, t.ticket_note, t.ticket_status, t.create_tmstmp, u.first_name, u.last_name
    FROM ticket t
    INNER JOIN users u ON u.id = t.user_id
    WHERE close_tmstmp IS NULL
    ORDER BY t.id`
    db.query(text)
    .then(data => {
        res.locals.ticket = data.rows;
        next();
    })
    .catch(err => {
        next({message: {err: 'Error in getTicket middleware function.'}})
    });
}

// get request for specific open ticket data

// ticketController.specificTicket = (req, res, next) => {
//     const { id } = req.body;
//     const ticketID = req.params.id;
//     // find id param provided in the route in the ticket table on the property id
//     const getTicketData = ticket.find((id) => ticket.id === ticketID)
//     const text = `SELECT u.id, u.first_name, u.last_name, u.street_address, u.zip_code, u.phone, u.email, u.service_type, t.id, t.ticket_reason, t.ticket_note, t.note_tmstmp, t.ticket_status, t.create_tmstmp, a.appt_dt, a.appt_time
//     FROM user u
//     INNER JOIN ticket t
//     WHERE u.id = t.user_id
//     INNER JOIN appointment a`
//     if (!getTicketData) {
//         res.status(500).send('ID not found')
//     } 
//     else {
//         db.query(text)
//           .then(data => {
//               res.locals.ticketData = data;
//               return next();
//           })
//     }
// }

module.exports = ticketController;