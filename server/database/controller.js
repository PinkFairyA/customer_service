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
    const search = `SELECT username, password FROM user_login WHERE USERNAME = $1`;
    // pass an array into db.query labeled params
    const params = [ username ];
      // pass SQL query defined in search and params array into db.query
      db.query(search, params)
        .then(data => {
        if (data.rows[0].password === password) {
            res.locals.userStatus = 'Success';
            return next();
        }
        else {
            res.locals.userStatus = 'Fail'
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
    const { first_name, last_name, street_address, phone, email } = req.body;
    // include WHERE in the SQL query as opposed to just pulling ALL the data from all columns
    
    // Want the WHERE condition to be where user.id = ticket.user_id based on current ticketID displayed.
    
    const text = `SELECT first_name, last_name, street_address, phone, email FROM users WHERE id = `;
        
    db.query(text)
    .then(data => {
        res.locals.customer = data;
        next();
    })
    .catch(err => {
        next({message: {err: 'Error in getCustomer middleware function.'}})
    });
        
}

// Ticket Note component 


// Ticket Detail component: has Ticket ID and ticket Body
// Need to pull Ticket ID and ticket body from tickets table where Ticket ID = what was clicked from home page. 
ticketController.getTicket = (req, res, next) => {
    
    const { id, ticket_reason } = req.body;
// Need to grab id from req.body(?)
    const text = `SELECT id, ticket_reason FROM ticket WHERE id = `
    db.query(text)
    .then(data => {
        res.locals.ticket = data;
        next();
    })
    .catch(err => {
        next({message: {err: 'Error in getTicket middleware function.'}})
    });
}
// Customer history component 
ticketController.getHistory = (req, res, next) => {

}
module.exports = ticketController;