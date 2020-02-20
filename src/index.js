const express = require('express');
const router = express.Router();

router.get('/', require('./list'));

router.post('/', require('./create'));
router.delete('/:id', require('./delete'));

module.exports = router;