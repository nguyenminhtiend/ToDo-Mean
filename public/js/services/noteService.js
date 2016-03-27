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
