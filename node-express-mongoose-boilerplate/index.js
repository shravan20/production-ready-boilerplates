import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport';
import httpStatus from 'http-status';

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

module.exports = app;
