const client = require('../connection');

const seed = async (data) => {
  await client.connect();

  const dropCollection = client.db().collection('breeds');

  try {
    await dropCollection.drop();
  } catch (err) {
    console.log('The collection did not already exist. No action necessary.');
  }

  client.db().createCollection('breeds');
  const collection = client.db().collection('breeds');
  await collection.insertMany(data);
};

module.exports = seed;
