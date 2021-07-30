const client = require('./connection');

exports.findDogByBreed = async (breed) => {
  await client.connect();

  const collection = client.db().collection('breeds');

  const result = await collection.findOne({ breed_param: breed });

  return { breedInformation: result };
};
