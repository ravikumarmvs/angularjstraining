/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('firstDirective', function ($timeout, employeeFactory) {
    return {
        restrict: "AEC",
        templateUrl: 'Directives/employeeDirective.html',
        link: function (scope, element, attr) {
            var myTimeoutId;
            scope.$watch(function () { return employeeFactory.EmployeeStatusString }, function (NewValue, OldValue) {
                if (NewValue !== undefined && NewValue !== '') {
                    if (employeeFactory.EmployeeStatusString.empId === scope.e.id) {
                        enterText(employeeFactory.EmployeeStatusString.statusValue);
                    }
                }

                              
            }, true);

            function enterText(NewValue) {
                if (NewValue === undefined || NewValue === '' || NewValue.includes('default')) {
                    element.removeClass('employeeStatusDeleted');
                    element.removeClass('employeeStatusUpdated');
                    element.removeClass('employeeStatusAdded');
                }
                else if (NewValue.includes('Added')) {
                    element.removeClass('employeeStatusDeleted');
                    element.removeClass('employeeStatusUpdated');
                    element.addClass('employeeStatusAdded');
                }
                else if (NewValue.includes('Updated')) {
                    element.removeClass('employeeStatusAdded');
                    element.removeClass('employeeStatusDeleted');
                    element.addClass('employeeStatusUpdated');
                }
                else {
                    element.removeClass('employeeStatusAdded');
                    element.removeClass('employeeStatusUpdated');
                    element.addClass('employeeStatusDeleted');
                }
                if (NewValue !== 'default') {
                    myTimeoutId = $timeout(function () {
                        enterText('default');                        
                    }, 3000);
                }
            }

            //element.on('$destroy', function () {
            //    if (angular.isDefined(myTimeoutId)) {
            //        $interval.cancel(myTimeoutId);
            //    }
            //});

        }
    }
});
