"use strict";
var angular = require('angular');

var app = angular.module('app', [require('angular-ui-router')]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/note');

    $stateProvider
        .state('note', {
            url: '/note',
            templateUrl: 'partials/note.html',
            controller: 'noteController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'userController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        });
}]);

app.controller('aboutController', require('./controllers/aboutController'));
app.controller('noteController', require('./controllers/noteController'));
app.controller('userController', require('./controllers/userController'));

app.factory('noteService', require('./services/noteService'));
