"use strict";
var angular = require('angular');

var app = angular.module('app', [require('angular-ui-router')]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/note');

    $stateProvider
        .state('note', {
            url: '/note',
            templateUrl: 'views/note.html',
            controller: 'noteController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        });
}]);

app.controller('aboutController', require('./controllers/aboutController'));
app.controller('noteController', require('./controllers/noteController'));

app.factory('noteService', require('./services/noteService'));