mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;

    votingService.loadVotings();
    $scope.votingOptions = [{optionValue: ""}];
    var votingOptions = [];

    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.createVoting = function () {
        votingService.createNewVoting($scope.newVoting);
        $scope.newVoting = [];
    }

    $scope.openVotings = function (voting) {
        if ((voting.votingCloseDate) >= new Date()) {
            return true;
        } else {
            return false;
        }

    };

    $scope.closedVotings = function (voting) {
        if ((voting.votingCloseDate) < new Date()) {
            return true;
        } else {
            return false;
        }
    };

    $scope.addOption = function(newOptionValue){
        $scope.votingOptions.push({optionValue: newOptionValue});
    };


})