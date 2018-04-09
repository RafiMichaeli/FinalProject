mainHoaApp.factory('messagesService', function ($log, $http, $q) {
    var messages = [];
    var msgWasEverLoaded = false;
    var comments = [];
    var comWasEverLoaded = false;

    function Message(messageId,
        messageCreatedBy,
        messageCreatedAt,
        messageSubject,
        messageBody,
        messageType,
        messageComments) {
        this.messageId = messageId;
        this.messageCreatedBy = messageCreatedBy;
        this.messageCreatedAt = messageCreatedAt;
        this.messageSubject = messageSubject;
        this.messageBody = messageBody;
        // if ()
        this.messageType = messageType;
        this.messageComments = messageComments;
    }

    function Comment(commentId,
        commentCreateBy,
        commentCreatedAt,
        commentBody,
        messageId) {
        this.commentId = commentId;
        this.commentCreateBy = commentCreateBy;
        this.commentCreatedAt = commentCreatedAt;
        this.commentBody = commentBody;
    }

    /* function load() {
        var async = $q.defer();
        if (comWasEverLoaded) {
            async.resolve();
        } else {
            $http.get("app/data/comments.json").then(function (response) {
                comments.splice(0, messages.length)
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
    } */



    function load() {
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
            "currentUser",
            "" + new Date(),
            newMessage.messageSubject,
            newMessage.messageBody,
            newMessage.messageType,
            []);
        messages.push(message);
    }


    // function addCar(brand, model, year, km, testDate) {
    //   var car = new Car(brand, model, year, km, testDate);
    //   cars.push(car);




    //function (getMessages) {

    // }

    return {
        createNewMessage: creatNewMessage,
        messages: messages,
        load: load
    }
})