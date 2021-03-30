const { pool } = require('pg')

const database = 'postgres://udgwxpdc:Q_hQczgRlGlf9zcEDOTlVIsr7gH_rvdB@ziggy.db.elephantsql.com:5432/udgwxpdc'

const pool = new pool({
  connectionsString: database
});

module.export = {
  query: (text, params, callback) =>{
    console.log('executed query', text)
    return pool.query(text, params, callback)
  }
}