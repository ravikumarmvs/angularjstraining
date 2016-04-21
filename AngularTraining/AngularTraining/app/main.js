(function () {
  'use strict';
   EmployeeDb.controller('NewEmployees', function ($scope) {
       $scope.CheckEnableDisable = function () {
           return (!$scope.name || !$scope.role);
       }

       $scope.employees = [];
       $scope.addEmployees = function () {
           var newEmployee = { name: $scope.name, role: $scope.role };
           $scope.employees.push(newEmployee);
           init();
       }

       $scope.removeEmployees = function (e) {
           $scope.employees.splice(e, 1);
       }

       function init() {
           $scope.name = "";
           $scope.role = "";
       }

   });

   EmployeeDb.directive('firstDirective', function () {
       return {
           restrict: "AEC",
           template: '<h3>{{e.name + " is " + e.role}} built with directive <button ng-click="removeEmployees($index)">Delete Employee</button> </h3>'
       }
   });

   EmployeeDb.controller('EmployeeDetails', function ($scope) {
       $scope.FirstName = 'Ravi';
       $scope.LastName = 'Kumar';
       $scope.Age = 'Always 16';
       $scope.UAN = '123456';
       $scope.Skills = 'SharePoint';
       $scope.IsIndian = true;
       $scope.ShowEmployeeEntry = true;
       $scope.EnterEmployeeDetails = function () {
           $scope.ShowEmployeeEntry = true;
           $scope.ShowEmployeeSummary = false;
       }
       $scope.PopulateEmployeeDetails = function () {
           $scope.ShowEmployeeEntry = false;
           $scope.ShowEmployeeSummary = true;
           $scope.FirstNameSummary = $scope.FirstName;
           $scope.LastNameSummary = $scope.LastName;
           $scope.AgeSummary = $scope.Age;
           $scope.UANSummary = $scope.UAN;
           $scope.SkillsSummary = $scope.Skills;
           if ($scope.IsIndian) {
               $scope.IsIndianSummary = 'Yes';
           }
           else {
               $scope.IsIndianSummary = 'No';
           }
       }
  });
})();
