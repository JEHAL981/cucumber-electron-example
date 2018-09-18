const path = require('path');
const express = require('express');
const app = express();

app.get('/music/:genre', (req, res) => {
  res.json({ rock: 'MUSE' })
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
