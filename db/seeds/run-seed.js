const devData = require('../data/dev-data');
const seed = require('./seed.js');
const client = require('../connection');

const runSeed = () => {
  return seed(devData).then(() => client.close());
};

runSeed();
