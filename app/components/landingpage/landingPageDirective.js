mainHoaApp.directive('landingPageDirective', function($location) {    
    return {
      templateUrl: 'app/components/landingpage/landingpage.html',
      controller: 'loginCtrl'
    };
  })