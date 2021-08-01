exports.notFound = (req, res) => {
  res.status(404).send({ msg: 'Path not recognised' });
};

exports.handleCustomerErrors = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
};
