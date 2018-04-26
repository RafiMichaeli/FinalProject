mainHoaApp.directive('dashboardDirectve', function($location) {    
    return {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    };
  })