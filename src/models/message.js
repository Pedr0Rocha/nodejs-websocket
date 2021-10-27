const mongoose = require('../database');

const MessageSchema = new mongoose.Schema({
  key: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  }
});

const Message = mongoose.Model('Message', MessageSchema);

module.exports = Message;
