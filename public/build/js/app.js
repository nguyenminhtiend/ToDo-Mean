(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var app = angular.module('app', ['ui.router']);

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

},{"./controllers/aboutController":2,"./controllers/noteController":3,"./controllers/userController":4,"./services/noteService":5}],2:[function(require,module,exports){
'use strict';

var aboutController = function ($scope) {
    $scope.message = "About page";
};

aboutController.$inject = ['$scope'];

module.exports = aboutController;

},{}],3:[function(require,module,exports){
'use strict';

var noteController = function ($scope, noteService) {

    noteService.getAll().then(function (response) {
        $scope.notes = response.data;
    });
};

noteController.$inject = ['$scope', 'noteService'];

module.exports = noteController;

},{}],4:[function(require,module,exports){
'use strict';

var userController = function ($scope) {


};

userController.$inject = ['$scope'];

module.exports = userController;

},{}],5:[function(require,module,exports){
/**
 * Created by Messi on 3/24/2016.
 */

'use strict';
var injectParams = ['$http'];

var noteService = function ($http) {

    var serviceBase = 'api/notes/', factory = {};

    factory.getAll = function () {
        return $http.get(serviceBase);
    };
    factory.getById = function (id) {
        return $http.get(serviceBase + id);
    };
    factory.create = function (note) {
        return $http.post(serviceBase, note);
    };
    factory.update = function (id, note) {
        return $http.put(serviceBase + id, note);
    };
    factory.deleteEmployee = function (id) {
        return $http.delete(serviceBase + id);
    };
    return factory;
};

noteService.$inject = injectParams;

module.exports = noteService;

},{}]},{},[1]);
