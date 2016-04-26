angular.module('EmployeeDB').filter('employeeSearchFilter', function () {
    return function (employees, searchString, caseSensitiveSearch) {
        var filteredEmployees = [];
        if (searchString !== undefined && searchString !== '') {
            if (caseSensitiveSearch) {
                for (i = 0; i < employees.length; i++) {
                    e = employees[i];
                    if (e.name.indexOf(searchString) > -1) {
                        filteredEmployees.push(e);
                    }
                }
            }
            else {
                for (i = 0; i < employees.length; i++) {
                    e = employees[i];
                    if (e.name.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
                        filteredEmployees.push(e);
                    }
                }
            }
            return filteredEmployees;
        }

        else {
            return employees;
        }
    }
});