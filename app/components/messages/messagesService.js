mainHoaApp.factory('messagesService', function ($log, $http, $q) {
    var messages = [];
    var wasEverLoaded = false;

    function Message(messageId, messageCreatedBy, messageCreatedAt, messageSubject, messageBody, messageType, messageComments) {
        this.messageId = messageId;
        this.messageCreatedBy = messageCreatedBy;
        this.messageCreatedAt = messageCreatedAt;
        this.messageSubject = messageSubject;
        this.messageBody = messageBody;
       // if ()
        this.messageType = messageType;
        this.messageComments = messageComments;
    }
    function load() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve();
        } else {
            $http.get("app/components/messages/messages.json").then(function (response) {
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
    function newMessage() {

    }
    //function (getMessages) {
    
     // }
    return {
        newMessage: newMessage,
        messages: messages,
        load: load
    }
})