const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

require('./controllers/messagesController')(app);

app.listen(process.env.PORT);
