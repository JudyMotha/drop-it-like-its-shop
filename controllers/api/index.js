const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./apiroutes');

router.use('/users', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;

