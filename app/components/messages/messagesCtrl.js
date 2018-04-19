mainHoaApp.controller("messagesCtrl", function ($scope, $http, $location, messagesService, activeUserService) {

    $scope.messages = [];
    $scope.comments = [];
    $scope.filterMessages = "";
    $scope.commentBody = "";
    $scope.currentUser = activeUserService.getUser();

    //login as admin - to be deleted //
    /* function loginAllTime() {
        if (activeUserService.isLoggedIn() === false) (
            activeUserService.login("rafi@rafi.com", "123")
        )
    } */

    //login as admin - to be deleted //


    messagesService.loadMessages().then(function () {
        $scope.messages = messagesService.messages;
    });

    $scope.createMessage = function () {
        messagesService.createNewMessage($scope.newMessage);
        $scope.newMessage = {};
        //$modalInstance.close();
    }

    $scope.createComment = function (message) {
        messagesService.createNewComment(message, message.draftComment)
        message.draftComment = "";
    }

    $scope.deleteComment = function (comment, messageComments) {
        var index = messageComments.indexOf(comment);
        messageComments.splice(index, 1);
    }


    $scope.filterInMessages = function (messages) {
        if ((!$scope.searchMessages || messages.messageSubject.toLowerCase().includes($scope.searchMessages.toLowerCase())) &&
            ($scope.filterMessages == messages.messageType || $scope.filterMessages == 'No Filter' || !$scope.filterMessages)) {
            return true;
        }
        return false;
    };

})