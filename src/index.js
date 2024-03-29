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

    Message.findOneAndUpdate({ 'key': data.key }, data, { upsert: true }, function(err, doc) {
      if (err) {
        console.log(err);
        return;
      }

      console.log("New message saved!");
      socket.broadcast.emit("savedMessage", data);
    });
  });
});

server.listen(process.env.PORT);
