describe('Hello World example ', function () {

    beforeEach(module('app'));

    var aboutController, scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        aboutController = $controller('aboutController', {
            $scope: scope
        });
    }));
    it('says hello world!', function () {
        expect(scope.message).toEqual("About page 123!");
    });

});