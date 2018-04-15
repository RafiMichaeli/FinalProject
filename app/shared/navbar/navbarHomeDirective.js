mainHoaApp.directive('navbarHomeDirective', function($location) {    
    return {
      templateUrl: 'app/shared/navbar/navbarhome.html',
      controller: 'navbarCtrl'
    };
  })