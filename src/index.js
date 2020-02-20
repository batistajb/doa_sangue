const express = require('express');
const router = express.Router();

router.get('/', require('./list'));

router.post('/', require('./create'));

module.exports = router;