const express = require('express');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response, next) => response.send('Testing'));

module.exports = app;
