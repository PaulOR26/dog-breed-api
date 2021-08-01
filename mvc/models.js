const client = require('../db/connection');

exports.findDogByBreed = async (breed) => {
  // await client.connect();

  const collection = client.db().collection('breeds');

  const result = await collection.findOne({ breed_param: breed });

  if (!result) {
    return Promise.reject({
      status: 404,
      msg: `${breed} does not exist in database`,
    });
  } else return { breedInformation: result };
};
exports.findAllDogs = async () => {
  const breedArray = [];
  // await client.connect();

  const collection = client.db().collection('breeds');

  await collection.find().forEach((dog) => {
    breedArray.push(dog);
  });

  return { allDogs: breedArray };
};
