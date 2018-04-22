mainHoaApp.directive('votingDirective', function ($location) {
    return {
        templateUrl: 'app/components/voting/voting.html',
        controller: 'votingCtrl'
    };
})