mainHoaApp.controller("tenantsCtrl", function ($scope, $http, $location, messagesService, activeUserService, tenantsService) {

    $scope.activeUser = activeUserService.getUser();

    tenantsService.loadTenants();

    $scope.tenants = tenantsService.tenants;

    $scope.creatTenant = function () {
        tenantsService.createNewTenant($scope.newTenant);
        $scope.newTenant = {};
    }


    /*  tenantsService.loadTenants().then(function () {
        $scope.tenants = tenantsService.tenants;
    }); */
})