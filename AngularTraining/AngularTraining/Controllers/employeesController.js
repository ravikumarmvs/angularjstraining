/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

'use strict';

angular.module('EmployeeDB').controller('EmployeesEntryCtrl', function ($rootScope, $scope, employeeFactory) {
    
    $scope.EmployeeArray = employeeFactory.EmployeeArray;
    $scope.InitialEmployeeInParentScope = {};
    $rootScope.rootHistoryItems = [];
       $rootScope.applicationUserName = "Ravi Kumar";
       $rootScope.applicationUserId = "E3102";
       
       $scope.CheckEnableDisable = function () {
           return (!$scope.InitialEmployeeInParentScope.name || !$scope.InitialEmployeeInParentScope.role || !$scope.InitialEmployeeInParentScope.projectDetails.project || !$scope.InitialEmployeeInParentScope.projectDetails.projectLocation);
       }

       $scope.addEmployees = function () {
           var newEmployee = { name: $scope.InitialEmployeeInParentScope.name, role: $scope.InitialEmployeeInParentScope.role, projectDetails: { project: $scope.InitialEmployeeInParentScope.projectDetails.project, projectLocation: $scope.InitialEmployeeInParentScope.projectDetails.projectLocation } };
           if (employeeFactory.compareEmployeeObject(undefined, newEmployee))
               return alert('Employee already exists. Please enter a unique Employee');
           if (employeeFactory.sharedProfile.name == "default name") {
               if (employeeFactory.EmployeeArray == undefined || employeeFactory.EmployeeArray.length <= 0) {
                   employeeFactory.updateSharedProfile(newEmployee, 0);
                   employeeFactory.DisableEmployeeProfileUpdationButton(false);
               }
               else
               {
                   employeeFactory.updateSharedProfile(employeeFactory.EmployeeArray[0], 0);
               }
           }
           employeeFactory.AddArrayValue(newEmployee);
           $rootScope.rootHistoryItems.push({ name: newEmployee.name + " has been added", indexValue: Math.random() });
           init();
       }

       $scope.removeEmployees = function (e, indexValue) {
           
           employeeFactory.EmployeeArray.splice(employeeFactory.EmployeeArray.indexOf(e), 1);
           if (employeeFactory.compareEmployeeObject(e, employeeFactory.sharedProfile))
           {
               employeeFactory.updateSharedProfile(undefined);
               employeeFactory.DisableEmployeeProfileUpdationButton(true);
           }
           $rootScope.rootHistoryItems.push({ name: e.name + " has been removed", indexValue: indexValue });
       }
       // set default profile value.
       if (employeeFactory.EmployeeArray != undefined && employeeFactory.EmployeeArray.length > 0) {
           employeeFactory.updateSharedProfile(employeeFactory.EmployeeArray[0], 0);
           employeeFactory.DisableEmployeeProfileUpdationButton(false);
       }

       $scope.viewProfile = function (currentEmployee, indexValue) {
           employeeFactory.updateSharedProfile(currentEmployee, indexValue);
           $rootScope.rootHistoryItems.push({ name: currentEmployee.name + " profile viewed", indexValue: indexValue });
           employeeFactory.DisableEmployeeProfileUpdationButton(false);
       }

       function init() {
           $scope.InitialEmployeeInParentScope.name = "";
           $scope.InitialEmployeeInParentScope.role = "";
           $scope.InitialEmployeeInParentScope.projectDetails.project = "";
           $scope.InitialEmployeeInParentScope.projectDetails.projectLocation = "";
       }
     });

     
