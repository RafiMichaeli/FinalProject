mainHoaApp.controller("homeCtrl", function ($scope, $location, activeUserService) {
    $scope.userName = activeUserService.getUser();
})