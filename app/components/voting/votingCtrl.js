mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;

    votingService.loadVotings();

    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.creatVoting = function () {
        votingService.creatNewVoting($scope.newVoting);
    }


    $scope.closedVotings = function () {
        for (var f = 0; f < $scope.votings.length;) {
            if (($scope.votings[f].votingCloseDate) < new Date()) {
                return;
            } else {
                f++;
            }
        }
    };

    $scope.openVotings = function () {
        var today = new Date();
        for (var i = 0; i < $scope.votings.length; i++) {
            return $scope.votings[i].votingCloseDate >= today;
        }

    };

})