mainHoaApp.directive('landingPageDirective', function($location) {    
    return {
      templateUrl: 'app/components/landingpage/landingPage.html',
      controller: 'loginCtrl'
    };
  })