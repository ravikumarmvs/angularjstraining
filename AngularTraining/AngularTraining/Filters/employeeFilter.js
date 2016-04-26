angular.module('EmployeeDB').filter('employeeFilter', function () {
    return function (e) {
        return "Employee Id :" + e.id + " -> " + e.name + "'s role is " + e.role;
    }
});