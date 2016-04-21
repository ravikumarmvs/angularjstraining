/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('employeeEntryDirective', function () {
    return {
        restrict: "AEC",        
        scope: {
            'actionType': '&',
            'enableDisable' : '&myEnableDisable',
            'InitialEmployee': '=myInitialEmployee',
            'actionName' : '@'
        },
        templateUrl: 'Directives/employeeEntryDirective.html'
    }
});
