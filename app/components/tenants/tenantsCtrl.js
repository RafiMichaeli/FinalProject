mainHoaApp.controller("tenantsCtrl", function ($scope, $http, $location, messagesService, activeUserService, tenantsService) {

    $scope.activeUser = activeUserService.getUser();

    tenantsService.loadTenants();

    $scope.tenants = tenantsService.tenants;

    $scope.creatTenant = function () {
        tenantsService.createNewTenant($scope.newTenant);
        $scope.newTenant = {};
    }

    $scope.updateTenant = function () {
        tenantsService.updateTenant();
    }
    /*  tenantsService.loadTenants().then(function () {
        $scope.tenants = tenantsService.tenants;
    }); */
})