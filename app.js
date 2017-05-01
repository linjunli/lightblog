/*
 * lightblog - app.js
 */

var config = require('./config.js');
var path = require('path');

//oneapm是一款服务器监控软件
if (!config.debug && config.oneapm_key) {
    require('oneapm');
}

require('colors');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var router = require('./routers.js');

var test = 'test';

var app = express();
app.use('/', router);
app.listen(config.port, (error) => {
    if (error) {
        console.log('error: ' + error);
        return;
    }
    console.log('listening: ' + config.port);
})

module.exports = app;