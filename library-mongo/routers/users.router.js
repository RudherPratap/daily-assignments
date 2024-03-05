const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      throw new Error();
    }

    res.json({ message: 'Login Successfully' });
  } catch (error) {
    res.status(401).send({ error: 'Invalid credentials.' });
  }
});

module.exports = router;
