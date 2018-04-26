mainHoaApp.directive('homeDirectve', function($location) {    
    return {
      templateUrl: 'app/components/home/home.html',
      controller: 'homeCtrl'
    };
  })