/**
 * Created by tiennguyenm on 3/15/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var dbConfig = require('./config/db');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url);

var port = process.env.PORT || 3000;

require('./app/routes')(app, router);

app.listen(port, function () {
    console.log('Running on port: ' + port);
});