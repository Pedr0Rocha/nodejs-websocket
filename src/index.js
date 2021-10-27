const express = require('express');

require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

require('./controllers/messagesController')(app);

io.on('connection', socket => {
  console.log(`${socket.id} connected`);

  socket.on('sendMessage', data => {
    console.log(data);
  });
});

app.listen(process.env.PORT);
