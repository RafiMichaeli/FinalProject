mainHoaApp.controller("votingCtrl", function ($scope, $http, $location, activeUserService, tenantsService, votingService) {

    $scope.votings = votingService.votings;

    votingService.loadVotings();
    $scope.votingOption = [];

    // $scope.votingOptions = [{optionValue, ""} { optionValue, ""}] //

    $scope.createVoting = function () {
        console.log("hello")
        votingService.createNewVoting($scope.newVoting);
        console.log($scope.newVoting);
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

    $scope.addOption = function(optionVal){
        $scope.votingOption.push(optionVal);
    };


})