const express = require('express');
const routes = require('./api/routes/index');
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/v1', routes);

app.get('/', (request, response, next) => response.send('Testing'));

module.exports = app;
