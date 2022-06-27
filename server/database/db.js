const { Pool } = require('pg')

// PG URI goes here
const PG_URI = 'postgres://qimscucq:KB5G13XzCaC2GSfBvL_KQwdzyor6OXFJ@heffalump.db.elephantsql.com/qimscucq';


const pool = new Pool({
    connectionString: PG_URI
})

 module.exports = { 
    query: (queryStr, params, cb) => {
        return pool.query(queryStr, params, cb)
    } 
}
