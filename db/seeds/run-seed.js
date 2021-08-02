const devData = require('../data/dev-data');
const seed = require('./seed.js');
const client = require('../connection');

const runSeed = () => {
  return seed(devData).then(() => client.close());
};

runSeed().catch((err) => {
  throw new Error('Error occurred during seed');
});
