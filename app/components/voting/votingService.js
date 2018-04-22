mainHoaApp.factory('votingService', function ($log, $http, $q, activeUserService) {
    var votings = [];

    function Voting(
        votingCreatedBy,
        votingCreatedAt,
        votingTitle,
        votingDetails,
        votingOptions,
        votingCloseDate,
        votingVotes
    ) {
        this.votingCreatedBy = votingCreatedBy;
        this.votingCreatedAt = votingCreatedAt;
        this.votingTitle = votingTitle;
        this.votingDetails = votingDetails;
        this.votingOptions = votingOptions;
        this.votingCloseDate = votingCloseDate;
        this.votingVotes = votingVotes;
    }

    function creatNewVoting(newVoting){
        votings.push(new Voting(
            activeUserService.getUser(),
            "" + new Date(),
            votingTitle,
            votingDetails,
            votingOptions,
           // new Date(votingCloseDate) 
        ))
    }

    return {
        creatNewVoting: creatNewVoting,
        votings: votings
    }
})