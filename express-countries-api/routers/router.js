const express = require('express');
const router = express.Router();
const countriesRouter = require('./countriesRouter');

router.use('/', countriesRouter);

module.exports = router;