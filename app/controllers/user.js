/**
* Created by tiennguyenm on 3/16/2016.
*/
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt    = require('jsonwebtoken');

module.exports = function (app) {

  router.route('/register')
  .post(function (req, res) {
    var user = new User({
      username: req.body.username,
      password: req.body.password,
      admin: true
    });
    user.save(function (err) {
      if (err) throw err;

      res.json({message: 'Note created!'});
    });
  });

  router.route('/users')
  .get(function (req, res) {
    User.find({}, function (err, users) {
      if (err) throw err;

      res.json(users);
    });
  });

  router.route('/login')
  .post(function (req, res) {
    User.findOne({username: req.body.username}, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          var token = jwt.sign(user, app.get('superSecret'), {
            expiresInMinutes: 1440 // expires in 24 hours
          });
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    });
  });
  app.use('/api', router);
};
