var mainHoaApp = angular.module("mainHoaApp", ['ngRoute'])

mainHoaApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "index.html",
            controller: "mainHoaCtrl"
       // }).when("/landingPage", {
         //   templateUrl: "index.html",
           // controller: "landingPageCtrl"
        }).when("/messages", {
            templateUrl: "app/components/messages/messages.html",
            controller: "messagesCtrl"
            //  }).when("/movies/:movieId",{
            //    templateUrl: 'movieDetail.html',
            //   controller: 'movieDetailCtrl'
        }).otherwise({
            redirecTo: "/"
        })
    //$locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('*');
});