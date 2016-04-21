
  'use strict';
   angular.module('EmployeeDB').controller('EmployeesEntry', function ($scope, employeeFactory) {

       $scope.CheckEnableDisable = function () {
           return (!$scope.name || !$scope.role);
       }

       $scope.employees = [{name:'ravi', role:'architect'}, {name:'lokesh', role:'lead'}, {name:'shiva',role:'dev'}];

       $scope.addEmployees = function () {
           var newEmployee = { name: $scope.name, role: $scope.role };
           $scope.employees.push(newEmployee);
           init();
       }

       $scope.removeEmployees = function (e) {
           $scope.employees.splice(e, 1);
       }
       // set default profile value.
employeeFactory.updateSharedProfile($scope.employees[0]);

       $scope.viewProfile = function (currentEmployee){
employeeFactory.updateSharedProfile(currentEmployee);
       }

       function init() {
           $scope.name = "";
           $scope.role = "";
       }
     });

     
