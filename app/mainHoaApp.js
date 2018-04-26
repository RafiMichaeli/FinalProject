var mainHoaApp = angular.module('mainHoaApp', ['ngRoute', "googlechart"])

mainHoaApp.config(function ($routeProvider) {
    $routeProvider
        .when("/landingpage", {
            templateUrl: "app/components/landingpage/landingpage.html",
            controller: "loginCtrl"
        })
        .when("/home", {
            templateUrl: "app/components/home/home.html",
            controller: 'homeCtrl'
        })
        .when("/messages", {
            templateUrl: "app/components/messages/messages.html",
            controller: 'messagesCtrl'
        })
        .when("/tenants", {
            templateUrl: "app/components/tenants/tenants.html",
            controller: "tenantsCtrl"
        })
        .when("/voting", {
            templateUrl: "app/components/voting/voting.html",
            controller: "votingCtrl"
        })
        .when("/issues", {
            templateUrl: "app/components/issues/issues.html"
            // controller: 
        })
        .otherwise({
            templateUrl: "app/components/landingpage/landingpage.html",
            controller: "loginCtrl"
        });
});