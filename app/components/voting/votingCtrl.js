mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;

    votingService.loadVotings();

    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.creatVoting = function () {
        votingService.creatNewVoting($scope.newVoting);
    }


    $scope.closedVotings = function (voting) {
        if ((voting.votingCloseDate) < new Date()) {
            return true;
        } else {
            return false;
        }
    };


    $scope.openVotings = function (voting) {
     return !closedVotings(voting);    
    }

})