'use strict';

var contactController = function ($scope) {
    $scope.message = "About page 123!";
};

contactController.$inject = ['$scope'];

module.exports = contactController;
