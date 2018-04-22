mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;
    
    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.creatVoting = function () {
        votingService.creatNewVoting($scope.newVoting);
        $scope.newVoting = {};
    }
})