/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('employeeStatusDirective', function ($interval, employeeFactory) {
    return {
        restrict: "AEC",
        link: function (scope, element, attr) {

            enterText(scope.$eval(attr.employeeStatusDirective));

            scope.$watch(function () { return employeeFactory.EmployeeStatusString.statusValue }, function (NewValue, OldValue) {
                if (NewValue !== undefined || NewValue !== '') {
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
                $interval.cancel(timeoutId);
            });

            //// start the UI update process; keep it for 3 seconds.

        }
    }
});
