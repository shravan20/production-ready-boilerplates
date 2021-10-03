const app = require('./src/app');
const config = require('./src/config/envConfig');
const logger = require('./src/config/logger');

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});
