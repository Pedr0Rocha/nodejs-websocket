const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.status(200).send({ "health": "ok" });
});

app.listen(process.env.PORT);
