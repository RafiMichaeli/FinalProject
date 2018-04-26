mainHoaApp.controller("dashboardCtrl", function ($scope, $location, activeUserService) {
    $scope.userName = activeUserService.getUser();
})