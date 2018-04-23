mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;

    votingService.loadVotings();

    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.creatVoting = function () {
        votingService.creatNewVoting($scope.newVoting);
    }

    $scope.closedVotings = function () {
        for (i = 0; i <= $scope.votings.length; i++) {
            return $scope.votings[i].votingCloseDate < new Date();
        }
    };

    $scope.openVotings = function () {
        for (i = 0; i <= $scope.votings.length; i++) {
            return $scope.votings[i].votingCloseDate >= new Date();
        }

    };

})