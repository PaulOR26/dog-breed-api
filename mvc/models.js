const client = require('../db/connection');
const { readFileSync } = require('fs');
const tf = require('@tensorflow/tfjs-node');
const knnClassifier = require('@tensorflow-models/knn-classifier');
const mobilenetModule = require('@tensorflow-models/mobilenet');

exports.findDogByBreed = async (breed) => {
  await client.connect();

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
  await client.connect();

  const collection = client.db().collection('breeds');

  await collection.find().forEach((dog) => {
    breedArray.push(dog);
  });

  return { allDogs: breedArray };
};

exports.runPrediction = async (imgTensor) => {
  model = await mobilenetModule.load();
  classifier = knnClassifier.create();

  let dataset = readFileSync('./datasetString.txt');

  let tensorObj = JSON.parse(dataset);

  Object.keys(tensorObj).forEach((key) => {
    tensorObj[key] = tf.tensor(tensorObj[key], [
      tensorObj[key].length / 1000,
      1000,
    ]);
  });

  classifier.setClassifierDataset(tensorObj);

  const xlogits = model.infer(imgTensor);

  const { label, confidences } = await classifier.predictClass(xlogits);

  await client.connect();

  const collection = client.db().collection('breeds');

  const breedObject = await collection.findOne({ breed: label });

  return {
    prediction: {
      ...breedObject,
      confidences: confidences[label],
      label: label,
    },
  };
};
