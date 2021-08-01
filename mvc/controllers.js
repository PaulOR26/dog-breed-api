const { findDogByBreed } = require('../mvc/models');

exports.getDogByBreed = (req, res, next) => {
  findDogByBreed(req.params.breed)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(next);
};
