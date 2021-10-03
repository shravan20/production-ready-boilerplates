const router = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check the route health
 *     description: Endpoint user to check the route health.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *     responses:
 *       "200":
 *         description: Created
 *         content:
 *           application/json
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */

router.get('/', (request, response, next)=>response.json({"health":"up"}));