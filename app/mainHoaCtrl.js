mainHoaApp.controller("mainHoaCtrl", function($scope, $location) {
    $scope.login = function() {
      $location.path("/home");
    }
  })