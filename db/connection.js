const { MongoClient } = require('mongodb');
const path = require('path');
const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: path.resolve(__dirname, `../.env.${ENV}`),
});
// console.log('atlas', process.env.MONGO_ATLAS_URI);

if (!process.env.MONGO_ATLAS_URI) {
  throw new Error('MONGO_ATLAS_URI or DATABASE_URL not set');
}

const uri = process.env.MONGO_ATLAS_URI;

const client = new MongoClient(uri);

module.exports = client;
