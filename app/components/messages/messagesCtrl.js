mainHoaApp.controller("messagesCtrl", function ($scope, $http, $location, messagesService) {
    
    $scope.commentsForTest = messagesService.commentsForTest;
    $scope.messages = [];
    $scope.comments = [];
    $scope.filterMessages = "";
    messagesService.loadMessages().then(function () {
        $scope.messages = messagesService.messages;
    });

    $scope.createMessage = function () {
        messagesService.createNewMessage($scope.newMessage);
        $scope.newMessage = {};
        //$modalInstance.close();
    }
    $scope.filterInMessages = function (messages) {
        if ((!$scope.searchMessages || messages.messageSubject.toLowerCase().includes($scope.searchMessages.toLowerCase())) &&
            ($scope.filterMessages == messages.messageType || $scope.filterMessages == 'No Filter' || !$scope.filterMessages)) {
            return true;
        }
        return false;
    };

})