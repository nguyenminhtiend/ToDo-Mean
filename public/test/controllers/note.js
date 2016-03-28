describe('Note Controller', function () {

    var noteController, scope, noteService;

    beforeEach(function () {
        var mockNoteService = {};
        module('app', function ($provide) {
            $provide.value('noteService', mockNoteService);
        });

        inject(function ($q) {
            mockNoteService.data = [
              {
                  id: 0,
                  name: 'Angular'
              }
            ];
            mockNoteService.getAll = function () {
                var defer = $q.defer();
                defer.resolve(this.data);
                return defer.promise;
            };
        });
    });

    beforeEach(inject(function ($rootScope, $controller, _noteService_) {
        scope = $rootScope.$new();
        noteService = _noteService_;
        noteController = $controller('noteController', {
            $scope: scope,
            noteService: noteService
        });
        scope.$digest();
    }));

    it('says hello world!', function () {
        expect(scope.message).toEqual("About page 123!");
    });

});