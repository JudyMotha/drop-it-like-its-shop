const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes );

module.exports = router;