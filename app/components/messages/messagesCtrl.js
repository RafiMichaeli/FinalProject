mainHoaApp.controller("messagesCtrl", function ($scope, $http, $location, messagesService) {

    $scope.messages = [];

    messagesService.load().then(function () {
        $scope.messages = messagesService.messages;
    });

})