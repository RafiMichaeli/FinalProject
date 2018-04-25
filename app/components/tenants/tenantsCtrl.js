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

    $scope.filterInTenasnts = function (tenants) {
        if (!$scope.searchTenants || tenants.userFirstName.toLowerCase().includes($scope.searchTenants.toLowerCase())) {
            return true;
        }
        return false;
    };





    /*  tenantsService.loadTenants().then(function () {
        $scope.tenants = tenantsService.tenants;
    }); */
})