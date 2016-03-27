/**
 * Created by tiennguyenm on 3/15/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config/configuration');
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('superSecret', config.secret);

mongoose.connect(config.url);

var port = process.env.PORT || 3000;

require('./app/controllers/note')(app);
require('./app/controllers/user')(app);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, function () {
    console.log('Running on port: ' + port);
});
