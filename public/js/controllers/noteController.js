'use strict';

var noteController = function ($scope, noteService) {

    noteService.getAll().then(function (response) {
        $scope.notes = response.data;
    });
};

noteController.$inject = ['$scope', 'noteService'];

module.exports = noteController;
