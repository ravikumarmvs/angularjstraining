/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('firstDirective', function () {
    return {
        restrict: "AEC",        
        templateUrl: 'Directives/employeeDirective.html'
    }
});
