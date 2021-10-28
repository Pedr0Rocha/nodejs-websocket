const mongoose = require('../database');

const MessageSchema = new mongoose.Schema({
  key: {
    type: String,
    require: true,
    unique: true,
  },
  value: {
    type: String,
    require: true,
  }
}, { timestamps: true });

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
