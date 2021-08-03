const app = require('./app');
const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`listening on ${PORT}`);
});

// load model and classifier in listen.js
//import them in to model
// base64 to tensor and run prediction
