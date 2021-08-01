const { findDogByBreed, findAllDogs } = require('../mvc/models');

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
