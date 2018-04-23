mainHoaApp.factory('votingService', function ($log, $http, $q, activeUserService) {
    var votings = [];

    function Voting(
        votingId,
        votingCreatedBy,
        votingCreatedAt,
        votingTitle,
        votingDetails,
        votingOptions,
        votingCloseDate,
        votingVotes
    ) {
        this.votingId = votingId;
        this.votingCreatedBy = votingCreatedBy;
        this.votingCreatedAt = votingCreatedAt;
        this.votingTitle = votingTitle;
        this.votingDetails = votingDetails;
        this.votingOptions = votingOptions;
        this.votingCloseDate = votingCloseDate;
        this.votingVotes = votingVotes;
    }
    function Vote(
        votedBy,
        votedAt,
        voteOption){
            this.votedBy;
            this.votedAt;
            this.voteOption;
        }

    function creatNewVoting(newVoting){
        votings.push(new Voting(
            votings.length +1,
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