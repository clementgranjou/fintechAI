const express = require('express')
const app = express()
const port = 3001


const transactions_model = require('./transactions_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/transactions', (req, res) => {
  transactions_model.getTransactions()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/transactions/sum', (req, res) => {
  transactions_model.getTransactionsSum()
    .then(sum => {
      res.status(200).send({ sum });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
// app.post('/transaction', (req, res) => {
//   transactions_model.createTransaction(req.body)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.delete('/transaction/:id', (req, res) => {
//   transactions_model.deleteTransaction(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })