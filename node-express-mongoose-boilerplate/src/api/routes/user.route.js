const router = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /user/health:
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
 *           application/json:
 *             schema:
 *               type: Object
 *               example:
 *                 health: up
 */
router.get('/health', (request, response) => response.json({ health: 'up' }));

module.exports = router;
