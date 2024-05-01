const Pool = require('pg').Pool
const pool = new Pool({
  user: 'fintechuser',
  host: 'localhost',
  database: 'fintechdata',
  password: 'root1',
  port: 5432,
});

const getTransactions = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM transactions ORDER BY transaction_id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getTransactionsSum = () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT SUM(amount) AS total FROM transactions', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0].total);
      });
    });
  };


  
  module.exports = {
    getTransactions,
    getTransactionsSum,
  }