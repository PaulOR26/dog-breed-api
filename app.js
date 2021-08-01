const express = require('express');
const { getDogByBreed } = require('./mvc/controllers');
const { handleCustomerErrors } = require('./errors/error-handlers');

const app = express();

app.get('/api/breeds/:breed', getDogByBreed);

app.use(handleCustomerErrors);

module.exports = app;
