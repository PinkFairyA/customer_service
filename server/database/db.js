const { Pool } = require('pg')

// PG URI goes here

const pool = new Pool({
    connectionString: PG_URI
})

 module.exports = { 
    query: (queryStr, params, cb) => {
        return pool.query(queryStr, params, cb)
    } 
}