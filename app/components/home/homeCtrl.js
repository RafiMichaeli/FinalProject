mainHoaApp.controller("homeCtrl", function ($scope, $location, activeUserService) {

    $scope.userToDisplay = "";

    $scope.displayUser(){
        activeUserService.getUser() = userToDisplay;
    }
})