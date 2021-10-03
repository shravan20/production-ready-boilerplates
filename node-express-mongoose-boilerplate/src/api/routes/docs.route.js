const router = require('express').Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../config/swaggerConfig');

const specifications = swaggerJsdoc({
  swaggerDefinition,
  apis: ['src/api/routes/*.route.js'],
});

router.use('/', swaggerUi.serve);

router.get(
  '/',
  swaggerUi.setup(specifications, {
    explorer: true,
  })
);

module.exports = router;
