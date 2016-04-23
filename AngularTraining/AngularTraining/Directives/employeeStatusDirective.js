/// <reference path="../app/angular.intellisense.js" />

angular.module('EmployeeDB').directive('employeeStatusDirective', function ($interval) {
    return {
        restrict: "AEC",
        link: function (scope, element, attr) {

            enterText(scope.$eval(attr.employeeStatusDirective));

            scope.$watch(attr.employeeStatusDirective, function (value) {
                if (value !== undefined || value !== '') {
                    if (value.statusValue.includes('Added')) {
                        element.removeClass('employeeStatusDeleted');
                        element.addClass('employeeStatusAdded');
                    }
                    else {
                        element.removeClass('employeeStatusAdded');
                        element.addClass('employeeStatusDeleted');
                    }

                    enterText(value);
                    timeoutId = $interval(function () {
                        element.text('');
                        $interval.cancel(timeoutId);
                    }, 3000);
                }
            });

            function enterText(value) {
                element.text(value.statusValue);
            }

            element.on('$destroy', function () {
                $interval.cancel(timeoutId);
            });

            //// start the UI update process; keep it for 3 seconds.

        }
    }
});
