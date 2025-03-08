const express = require('express');
const app = express();
const path = require('path');

// Statische Dateien (CSS, JS, etc.)
app.use(express.static('public'));

// Route für die Startseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;

