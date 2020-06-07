const express = require('express');
const router = express.Router();


router.use('/players', require('./player'));
router.use('/teams', require('./team'));

router.use('/posts',require('./post'));
router.use('/tags',require('./tag'));

module.exports = router;
