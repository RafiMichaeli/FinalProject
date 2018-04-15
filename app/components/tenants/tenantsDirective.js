mainHoaApp.directive('tenantsDirective', function($location) {    
    return {
      templateUrl: 'app/components/tenants/tenants.html',
      controller: 'tenantsCtrl'
    };
})