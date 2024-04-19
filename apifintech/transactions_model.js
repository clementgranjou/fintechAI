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
      pool.query('SELECT * FROM transactions ORDER BY transactionid ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

// const getTransactions = () => {
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT * FROM transactions', (error, results) => {
//       if (error) {
//         console.log("Error executing query:", error.message);
//         reject(error);
//       } else if (!results) {
//         console.log("No results object returned from query.");
//         reject(new Error("No results returned from the query."));
//       } else if (!results.rows) {
//         console.log("No rows available in results:", results);
//         reject(new Error("No rows in query results."));
//       } else {
//         resolve(results.rows);
//       }
//     })
//   }) 
// }


  // const createTransaction = (body) => {
  //   return new Promise(function(resolve, reject) {
  //     const { name, email } = body
  //     pool.query('INSERT INTO transactions (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
  //       if (error) {
  //         reject(error)
  //       }
  //       resolve(`A new merchant has been added added: ${results.rows[0]}`)
  //     })
  //   })
  // }
  // const deleteTransaction = () => {
  //   return new Promise(function(resolve, reject) {
  //     const id = parseInt(request.params.id)
  //     pool.query('DELETE FROM transactions WHERE id = $1', [id], (error, results) => {
  //       if (error) {
  //         reject(error)
  //       }
  //       resolve(`Merchant deleted with ID: ${id}`)
  //     })
  //   })
  // }
  
  module.exports = {
    getTransactions,
    // createTransaction,
    // deleteTransaction,
  }