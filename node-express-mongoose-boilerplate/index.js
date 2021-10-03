const app = require('./src/app.js');
const config = require('./src/config/config')

let server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });

