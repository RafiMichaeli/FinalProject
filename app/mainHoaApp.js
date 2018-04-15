var mainHoaApp = angular.module('mainHoaApp', ['ngRoute'])

mainHoaApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/components/landingpage/landingpage.html"
        })
        .when("/home", {
            templateUrl: "/app/components/home/home.html",
            controller: 'homeCtrl'
        })
        .when("/messages", {
            templateUrl: "app/components/messages/messages.html",
            controller: 'messagesCtrl'
        })
        .when("/tenants", {
            templateUrl: "app/components/tenants/tenants.html",
            // controller: "tenantsCtrl"
        })
        .when("/voting", {
            templateUrl: "app/components/voting/voting.html"
           // controller: 
        })
        .otherwise({
            templateUrl: "/app/components/home/home.html",
            controller: 'homeCtrl'
        });
});