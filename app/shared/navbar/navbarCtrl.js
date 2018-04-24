mainHoaApp.controller("navbarCtrl", function ($scope, $http, $location, activeUserService) {

    $scope.currentUser = activeUserService.getUser();

    $scope.logout = function () {
        activeUserService.logout();
        $location.path("/landingpage");

    }
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

})