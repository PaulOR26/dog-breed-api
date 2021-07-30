const express = require('express');
const { getDogByBreed } = require('./controllers');

const app = express();

app.get('/api/breeds/:breed', getDogByBreed);

module.exports = app;
