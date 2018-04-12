mainHoaApp.controller('loginCtrl', function ($scope, $http, $location, activeUserService) {

    $scope.invalidCredentails = false;
    $scope.loginEmail = "rafi@rafi.com";
    $scope.loginPass = "123";

    $scope.login = function () {
        // TODO: Here you should disable the login button until there is a response from the service

        activeUserService.login($scope.loginEmail, $scope.loginPass).then(function (successLogin) {
            if (successLogin) {
                document.getElementsByClassName("modal-backdrop fade show")[0].className = "modal fade";
                $location.path("/home");
            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        })
    }

})