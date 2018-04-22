mainHoaApp.controller("tenantsCtrl", function ($scope, $http, $location, messagesService, activeUserService, tenantsService) {

    $scope.activeUser = activeUserService.getUser();

    tenantsService.loadTenants();

    $scope.tenants = tenantsService.tenants;


    /*  tenantsService.loadTenants().then(function () {
        $scope.tenants = tenantsService.tenants;
    }); */
})