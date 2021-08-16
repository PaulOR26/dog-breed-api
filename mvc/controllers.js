const tf = require('@tensorflow/tfjs-node');

const apiInfo = require('../endpoints');
const { findDogByBreed, findAllDogs, runPrediction } = require('../mvc/models');

exports.getApi = (req, res) => {
  res.send({ endPoints: apiInfo });
};

exports.getDogByBreed = (req, res, next) => {
  findDogByBreed(req.params.breed)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(next);
};
exports.getAllDogs = (req, res, next) => {
  findAllDogs()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(next);
};

exports.getPrediction = (req, res, next) => {
  const imgBuffer = Buffer.from(req.body.base64, 'base64');
  const imgTensor = tf.node.decodeImage(imgBuffer);

  runPrediction(imgTensor)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(next);
};
