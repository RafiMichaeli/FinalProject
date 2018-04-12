mainHoaApp.controller("homeCtrl", function ($scope, $location, activeUserService) {

    $scope.userToDisplay = activeUserService.getUser();
 
})