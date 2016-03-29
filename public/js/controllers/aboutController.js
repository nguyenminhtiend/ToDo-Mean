'use strict';

var aboutController = function ($scope) {
    $scope.message = "About page";
};

aboutController.$inject = ['$scope'];

module.exports = aboutController;
