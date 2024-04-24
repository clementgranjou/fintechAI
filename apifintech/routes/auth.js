const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/user_model');
const router = express.Router();

// Environnement et configuration
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    const newUser = await createUser(username, hashedPassword);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
  const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '24h' });
  res.json({ token });
});

module.exports = router;
