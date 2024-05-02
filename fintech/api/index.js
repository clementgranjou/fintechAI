const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const axios = require("axios");


// const authRoutes = require('./routes/auth');
/* const {Configuration, OpenAIApi} = require('openai'); */

/* const config = new Configuration({
  apiKey:"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",
})

const openai = new OpenAIApi(config);
 */
app.post("/api/message", async (req, res) => {
  const { message } = req.body;

  /*   const response = await openai.createCompletion({
    model:'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 150
  });

  res.send(response.data.choices[0].text); */

  async function callOpenAI(message) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // Vérifiez que vous utilisez le modèle correct
          messages: [{ role: "user", content: message }],
          temperature: 0.7,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const chatResponse = response.data.choices[0].message.content;
      console.log('chatResponse', chatResponse)
      res.status(200).send(chatResponse);
    } catch (error) {
      console.error(
        "Error making API call:",
        error.response.status,
        error.response.data
      );
    }
  }

  callOpenAI(message);
});

const transactions_model = require("./models/transactions_model");

// app.use('/api/auth', authRoutes);

/* app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
}); */

app.get("/transactions", (req, res) => {
  transactions_model
    .getTransactions()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/transactions/sum", (req, res) => {
  transactions_model
    .getTransactionsSum()
    .then((sum) => {
      res.status(200).send({ sum });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
