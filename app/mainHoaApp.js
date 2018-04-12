var mainHoaApp = angular.module('mainHoaApp', ['ngRoute'])

mainHoaApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/components/landingpage/landingpage.html"
        })
        .when("/home", {
            templateUrl: "/app/components/home/home.html"
        })
});