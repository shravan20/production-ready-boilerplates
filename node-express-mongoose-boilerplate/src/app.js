const express = require('express');
const routes = require('./api/routes/index');
const app = express();
const cors = require('cors');

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/v1', routes);

app.get('/', (request, response, next) => response.send('Testing'));


// enable cors
app.use(cors());
app.options('*', cors());

module.exports = app;
