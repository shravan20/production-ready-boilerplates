const express = require('express');
const cors = require('cors');
const routes = require('./api/routes/index');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/v1', routes);

app.get('/', (request, response) => response.send('Testing'));

// enable cors
app.use(cors());
app.options('*', cors());

module.exports = app;
