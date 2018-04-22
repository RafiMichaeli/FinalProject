mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, messagesService, activeUserService, tenantsService) {

   $scope.user =  activeUserService.getUser();
})