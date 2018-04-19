mainHoaApp.factory("activeUserService", function ($http, $log, $q) {

    function User(plainUser) {
        this.userId = plainUser.userId;
        this.userFirstName = plainUser.userFirstName;
        this.userLastName = plainUser.userLastName;
        this.userEmail = plainUser.userEmail;
        this.userPwd = plainUser.userPwd;
        this.userApt = plainUser.userApt;
        this.isManager = plainUser.isManager;
        this.userData = plainUser.userData;
    }

    var activeUser = null;

    // This function will update the active user property with the logged in user
    // Will return true in case of successfull login. otherwise return false
    function login(loginEmail, loginPass) {
        var async = $q.defer();

        $http.get('app/data/users.json').then(
            function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].userEmail === loginEmail && response.data[i].userPwd === loginPass) {
                        activeUser = new User(response.data[i]);
                        async.resolve(true);
                    }
                }
                async.resolve(false);
            }, function (response) {
                $log.error("error in getting user json: " + JSON.stringify(response));
                async.reject();
            });

        return async.promise;
    }

    function getUser() {
        return activeUser;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    return {
        login: login,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        logout: logout,
    }
})