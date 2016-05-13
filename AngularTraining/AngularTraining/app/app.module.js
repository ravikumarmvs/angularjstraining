
'use strict';
angular.module('activityDB', []);
angular.module('loginDB', []);
angular.module('ProfileDB', []);
angular.module('EmployeeDB', []);
var employeeDb1 = angular.module('MainDB', ['ui.router', 'EmployeeDB', 'ProfileDB', 'loginDB', 'activityDB']);
employeeDb1.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: 'Templates/login_page.html',
            controller: 'loginCtrl'
        }).
        state('employeeEntry', {
            url: '/employeeEntry',
            templateUrl: 'Templates/employee_list.html',
            controller: 'EmployeesEntryCtrl'
        }).
        //state('employeeEntry.activities', {
        //    url: 'activities',
        //    templateUrl: 'Templates/employee_activities.html',
        //    controller: 'activityCtrl'
        //}).
        state('profile', {
            url: '/profile?id',
            templateUrl: 'Templates/profile.html',
            controller: 'EmployeeProfileCtrl'
        })    
});