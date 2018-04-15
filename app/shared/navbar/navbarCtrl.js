mainHoaApp.controller("navbarCtrl", function ($scope, $http, $location, activeUserService){
    
    $scope.currentUser = activeUserService.getUser();

})