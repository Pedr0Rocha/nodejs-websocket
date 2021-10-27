const express = require('express');

const Message = require('../models/message');

const router = express.Router();

router.get('/:key', async (req, res) => {
  const keyToSearch = req.params.key;

  if (!keyToSearch) {
    return res.status(422).send({ error: "A key is required." });
  }

  try {
    const message = await Message.findOne({
      key: keyToSearch
    }).select('-_id');

    if (!message) {
      return res.status(404).send({ error: "Message not found." });
    }

    return res.status(200).send({ message });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Error finding the key." });
  }
});

module.exports = app => app.use('/messages', router);
