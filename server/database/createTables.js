const db = require('./db.js');

// USER LOGIN
const createUserLogin = `CREATE TABLE user_login (
    id SERIAL PRIMARY KEY, 
    username varchar NOT NULL, 
    password varchar NOT NULL);`;
// USER
const userString = `CREATE TABLE users (
    id int PRIMARY KEY REFERENCES user_login (id),
    first_name varchar NOT NULL,
    last_name varchar NOT NULL, 
    street_address varchar NOT NULL, 
    zip_code integer NOT NULL CHECK (zip_code > 0 AND zip_code <= 99999) REFERENCES zip_code_table (zip_code),
    phone varchar NOT NULL,
    email varchar NOT NULL, 
    service_type varchar NOT NULL 
    ); `;

/*

    */
// TICKET
const ticket = `CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id),
    ticket_reason varchar NOT NULL,
    ticket_note varchar,
    note_tmstmp timestamp,
    ticket_status varchar NOT NULL,
    create_tmstmp timestamp NOT NULL,
    close_tmstmp timestamp
);`
// ZIP CODE TABLE
const createZipCode = `CREATE TABLE zip_code_table (
    zip_code integer NOT NULL PRIMARY KEY CHECK (zip_code > 0 AND zip_code <= 99999), 
    city varchar NOT NULL, 
    state varchar NOT NULL);`;

    // APPOINTMENT
const createAppointment = `CREATE TABLE appointment (
    ticket_id integer REFERENCES ticket (id), 
    appt_dt date, 
    appt_time time,
    PRIMARY KEY(ticket_id, appt_dt, appt_time));`;

