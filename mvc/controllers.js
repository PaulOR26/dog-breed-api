const { findDogByBreed } = require('../mvc/models');

exports.getDogByBreed = (req, res) => {
  findDogByBreed(req.params.breed).then((result) => {
    res.status(200).send(result);
  });
};
