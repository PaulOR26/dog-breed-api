const express = require('express');
const { getDogByBreed } = require('./mvc/controllers');
const {
  notFound,
  handleCustomerErrors,
  handleServerErrors,
} = require('./errors/error-handlers');

const app = express();

app.get('/api/breeds/:breed', getDogByBreed);

app.all('*', notFound);

app.use(handleCustomerErrors);
app.use(handleServerErrors);

module.exports = app;
