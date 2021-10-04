const mongoose = require('mongoose');
const config = require('./envConfig');
const logger = require('./logger');

const connectToDatabase = () => {
  mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then((connection) => logger.info(`DB Connect Successful${connection}`))
    .catch((err) => logger.error(`Connection Error${err}`));
};

module.exports = { connectToDatabase };
