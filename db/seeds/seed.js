const client = require('../connection');

const seed = async (data) => {
  await client.connect();

  const dropCollection = client.db().collection('breeds');
  dropCollection.drop();

  client.db().createCollection('breeds');

  const collection = client.db().collection('breeds');
  await collection.insertMany(data);
};

module.exports = seed;
