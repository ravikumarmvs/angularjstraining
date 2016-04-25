/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('employeeStatusDirective', function ($interval, employeeFactory) {
    return {
        restrict: "AEC",
        link: function (scope, element, attr) {
            var timeoutId;
            enterText(employeeFactory.EmployeeStatusString.statusValue);

            scope.$watch(function () { return employeeFactory.EmployeeStatusString }, function (NewValue, OldValue) {
                if (NewValue !== undefined || NewValue !== '') {
                    NewValue = employeeFactory.EmployeeStatusString.statusValue;
                    if (NewValue.includes('Added')) {
                        element.removeClass('employeeStatusDeleted');
                        element.removeClass('employeeStatusUpdated');
                        element.addClass('employeeStatusAdded');
                    }
                    else if (NewValue.includes('Updated')){
                        element.removeClass('employeeStatusAdded');
                        element.removeClass('employeeStatusDeleted');
                        element.addClass('employeeStatusUpdated');
                    }
                    else
                    {
                        element.removeClass('employeeStatusAdded');
                        element.removeClass('employeeStatusUpdated');
                        element.addClass('employeeStatusDeleted');
                    }
                    enterText(NewValue);                    
                }
                timeoutId = $interval(function () {
                    element.text('');
                    $interval.cancel(timeoutId);
                }, 3000);
            });

            function enterText(value) {
                element.text(value);
            }

            element.on('$destroy', function () {
                if (angular.isDefined(timeoutId)) {
                    $interval.cancel(timeoutId);
                }
            });

        }
    }
});
