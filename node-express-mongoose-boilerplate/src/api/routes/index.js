const router = require('express').Router();
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');

const defaultRoutes = [
    {
        path: '/user',
        route: userRoute
    }
];

// routes available only in development/stage 
const devRoutes = [
    {
        path: '/docs',
        route: docsRoute,
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === 'development') {
    devRoutes.forEach((route) => {
      router.use(route.path, route.route);
    });
}

module.exports = router;