/*
 * lightblog - router.js
 * routers
 */

const express = require('express');
const config = require('./config.js');
const site = require('./controllers/site.js');

const router = express.Router();

router.get('/', site.index);

module.exports = router;