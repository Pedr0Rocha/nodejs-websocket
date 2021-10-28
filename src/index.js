const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.json());
app.use(cors());

require('./controllers/messagesController')(app);

const Message = require('./models/message');

io.on('connection', socket => {
  console.log(`${socket.id} connected`);

  socket.on('sendMessage', data => {
    console.log(data);

    if (!data.key || !data.value) {
      return;
    }

    Message.create(data);
  });
});

server.listen(process.env.PORT);
