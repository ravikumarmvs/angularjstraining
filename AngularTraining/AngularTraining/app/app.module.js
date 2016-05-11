
'use strict';
angular.module('loginDB', []);
angular.module('ProfileDB', []);
angular.module('EmployeeDB', []);
var employeeDb1 = angular.module('MainDB', ['ngRoute', 'EmployeeDB', 'ProfileDB', 'loginDB' ]);
employeeDb1.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'Templates/login_page.html',
            controller: 'loginCtrl'
        }).
      when('/employeeEntry', {
          templateUrl: 'Templates/employee_list.html',
          controller: 'EmployeesEntryCtrl'
      }).
      when('/profile/:id', {
          templateUrl: 'Templates/profile.html',
          controller: 'EmployeeProfileCtrl'
      }).
      otherwise({
          redirectTo: 'Templates/login_page.html'
      });
});