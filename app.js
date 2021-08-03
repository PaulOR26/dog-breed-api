const express = require('express');
const cors = require('cors');

const {
  getDogByBreed,
  getAllDogs,
  getPrediction,
} = require('./mvc/controllers');
const {
  notFound,
  handleCustomerErrors,
  handleServerErrors,
} = require('./errors/error-handlers');

const app = express();

app.use(cors());

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb' }));

app.get('/api/breeds', getAllDogs);
app.get('/api/breeds/:breed', getDogByBreed);
app.get('/api/photo', getPrediction);

app.all('*', notFound);

app.use(handleCustomerErrors);
app.use(handleServerErrors);

module.exports = app;
