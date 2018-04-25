mainHoaApp.factory('messagesService', function ($log, $http, $q, activeUserService, tenantsService) {
    var messages = [];
    var msgWasEverLoaded = false;
    var comments = [];

    function Message(messageId,
        messageCreatedBy,
        messageCreatedAt,
        messageSubject,
        messageBody,
        messageType,
        messageComments) {
        this.messageId = messageId;
        this.messageCreatedBy = messageCreatedBy;
        this.messageCreatedAt = new Date (messageCreatedAt);
        this.messageSubject = messageSubject;
        this.messageBody = messageBody;
        this.messageType = messageType;
        this.messageComments = [];
        for (var i = 0; i < messageComments.length; ++i) {
            this.messageComments.push(new Comment(
                messageComments[i].commentCreateBy,
                messageComments[i].commentCreatedAt,
                messageComments[i].commentBody));
        }
    }

    function Comment(commentCreateBy,
        commentCreatedAt,
        commentBody, ) {
        this.commentCreateBy = tenantsService.tenants[commentCreateBy];
        this.commentCreatedAt = new Date(commentCreatedAt);
        this.commentBody = commentBody;
    }

    function loadMessages() {
        var async = $q.defer();
        if (msgWasEverLoaded) {
            async.resolve();
        } else {
            $http.get("app/data/messages.json").then(function (response) {
                messages.splice(0, messages.length)
                for (var i = 0; i < response.data.length; i++) {
                    messages.push(new Message(
                        response.data[i].messageId,
                        response.data[i].messageCreatedBy,
                        response.data[i].messageCreatedAt,
                        response.data[i].messageSubject,
                        response.data[i].messageBody,
                        response.data[i].messageType,
                        response.data[i].messageComments));
                }
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                async.reject();
            });
        }

        return async.promise;
    }

    function creatNewMessage(newMessage) {
        var message = new Message(
            messages.length + 1,
            activeUserService.getUser().userId,
            "" + new Date(),
            newMessage.messageSubject,
            newMessage.messageBody,
            newMessage.messageType,
            []);
        messages.push(message);
    }

    function createNewComment(message, commentBody) {
        var comment = new Comment(
            activeUserService.getUser().userId,
            "" + new Date(),
            commentBody
        );
        message.messageComments.push(comment);
    }

    return {
        createNewComment: createNewComment,
        createNewMessage: creatNewMessage,
        messages: messages,
        loadMessages: loadMessages
    }
})