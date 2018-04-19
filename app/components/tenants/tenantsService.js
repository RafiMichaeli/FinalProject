mainHoaApp.factory('tenantsService', function ($log, $http, $q, activeUserService) {

    /* if (activeUser.isManager === ture) then {load users}
    else{
        dont load user and give error that u r not a manager.
    } */

    var users = [];
    var wasEverLoaded = false;

    function Tenant(userId,
        userFirstName,
        userLastName,
        userEmail,
        userPwd,
        userApt,
        isManager,
        userData) {
        this.userId = userId;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmail = userEmail;
        this.userApt = userApt;
        this.isManager = isManager;
    }

    function loadTenants() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve();
        } else {
            $http.get("app/data/users.json").then(function (response) {
                messages.splice(0, messages.length)
                for (var i = 0; i < response.data.length; i++) {
                    messages.push(new Tenant(
                        response.data[i].userId,
                        response.data[i].userFirstName,
                        response.data[i].userLastName,
                        response.data[i].userEmail,
                        response.data[i].userApt,
                        response.data[i].isManager));
                }
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                async.reject();
            });
        }
    }
})