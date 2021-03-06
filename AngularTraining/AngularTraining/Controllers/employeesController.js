/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

'use strict';

angular.module('EmployeeDB').controller('EmployeesEntryCtrl', function ($rootScope, $scope, $state, employeeFactory) {
    $rootScope.isLoginPage = false;
    $scope.EmployeeArray = employeeFactory.EmployeeArray;
    $scope.InitialEmployeeInParentScope = {};
    $scope.InitialEmployeeInParentScope.projectDetails = {};    
    $scope.$watch(function () { return employeeFactory.EmployeeArray.length }, function (NewValue, OldValue) {
        if (NewValue != OldValue) {
            if (NewValue > OldValue) {
                alert('Employee has been added');
            }
            else {
                alert('Employee has been removed');
            }
        }
    }, true);
    $scope.CheckEnableDisable = function () {
        return (!$scope.InitialEmployeeInParentScope.name || !$scope.InitialEmployeeInParentScope.role);
    }

    $scope.addEmployees = function () {
        if (!$scope.InitialEmployeeInParentScope.projectDetails.project)
            $scope.InitialEmployeeInParentScope.projectDetails.project = 'TBD';
        if (!$scope.InitialEmployeeInParentScope.projectDetails.projectLocation)
            $scope.InitialEmployeeInParentScope.projectDetails.projectLocation = 'TBD';
        var newEmployee = { id: employeeFactory.EmployeeArray[employeeFactory.EmployeeArray.length - 1].id + 1, name: $scope.InitialEmployeeInParentScope.name, role: $scope.InitialEmployeeInParentScope.role, projectDetails: { project: $scope.InitialEmployeeInParentScope.projectDetails.project, projectLocation: $scope.InitialEmployeeInParentScope.projectDetails.projectLocation }, index: employeeFactory.EmployeeArray.length };
        if (employeeFactory.compareEmployeeObject(undefined, newEmployee))
            return alert('Employee already exists. Please enter a unique Employee');
        employeeFactory.DisableEmployeeProfileUpdationButton(false);

        employeeFactory.AddArrayValue(newEmployee);
        employeeFactory.UpdateEmployeeStatusString({ statusValue: 'status: Employee Added', empId: newEmployee.id });
        updateActivities({ value: newEmployee.name + " has been added", junk: Math.random() });
        init();
    }

    $scope.removeEmployees = function (e) {

        employeeFactory.EmployeeArray.splice(employeeFactory.EmployeeArray.indexOf(e), 1);
        employeeFactory.UpdateEmployeeStatusString({ statusValue: 'status: Employee Deleted', empId: e.id });
        updateActivities({value: e.name + " has been removed", junk: Math.random() });
    }
    
    $scope.viewProfile = function (currentEmployee) {
        updateActivities({ value: currentEmployee.name + " profile viewed", junk: Math.random() });
        employeeFactory.DisableEmployeeProfileUpdationButton(false);
        $state.go('profile', {id:currentEmployee.id});
    }

    function init() {
        $scope.InitialEmployeeInParentScope.name = "";
        $scope.InitialEmployeeInParentScope.role = "";
        $scope.InitialEmployeeInParentScope.projectDetails.project = "";
        $scope.InitialEmployeeInParentScope.projectDetails.projectLocation = "";
    }

    function updateActivities(message) {
        $scope.$broadcast('onAddingActivity', message);
        $scope.$on('onSuccess', function (event, data) {
            console.log('the returned message was  -> ' + data.value);
        });
    }
});


