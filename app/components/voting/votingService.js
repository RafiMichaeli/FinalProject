mainHoaApp.factory('votingService', function ($log, $http, $q, activeUserService) {
    var votings = [];
    var wasEverLoaded = false;

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
        voteOption) {
        this.votedBy;
        this.votedAt;
        this.voteOption;
    }


    function loadVotings() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve();
        } else {
            $http.get("app/data/votings.json").then(function (response) {
                votings.splice(0, votings.length)
                for (var i = 0; i < response.data.length; i++) {
                    votings.push(new Voting(
                        response.data[i].votingId,
                        response.data[i].votingCreatedBy,
                        response.data[i].votingCreatedAt,
                        response.data[i].votingTitle,
                        response.data[i].votingDetails,
                        response.data[i].votingOptions,
                        response.data[i].votingCloseDate,
                        response.data[i].votingVotes));
                }
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                async.reject();
            });
        }

    }



    function creatNewVoting(newVoting) {
        votings.push(new Voting(
            votings.length + 1,
            activeUserService.getUser(),
            "" + new Date(),
            votingTitle,
            votingDetails,
            votingOptions,
            new Date(votingCloseDate) 
        ))
    }

    return {
        loadVotings: loadVotings,
        creatNewVoting: creatNewVoting,
        votings: votings
    }
})