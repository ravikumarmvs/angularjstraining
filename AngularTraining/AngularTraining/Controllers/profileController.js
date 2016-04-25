/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

angular.module('ProfileDB').controller('EmployeeProfileCtrl', function ($rootScope, $scope, employeeFactory) {
    
    $scope.currentEmployee = employeeFactory.sharedProfile;
    $scope.DisableUpdation = function () {
        if (employeeFactory.compareEmployeeObject(undefined, employeeFactory.sharedProfile))
            return true;
        return !$scope.currentEmployee.name || !$scope.currentEmployee.role || !$scope.currentEmployee.projectDetails.project || !$scope.currentEmployee.projectDetails.projectLocation || employeeFactory.DisableUpdateProfile;
    }
    $scope.updateEmployees = function (currentEmployee, EmployeeIndex) {
        var newEmployee = { name: employeeFactory.sharedProfile.name, role: employeeFactory.sharedProfile.role, projectDetails: { project: employeeFactory.sharedProfile.projectDetails.project, projectLocation: employeeFactory.sharedProfile.projectDetails.projectLocation } };
        var existingUser = employeeFactory.EmployeeArray[EmployeeIndex];
        if (existingUser != undefined && existingUser.name != undefined) {
            $rootScope.rootHistoryItems.push({ name: existingUser.name + " profile changed", indexValue: EmployeeIndex });
        }
        employeeFactory.UpdateEmployeeValue(newEmployee, EmployeeIndex);
        employeeFactory.EmployeeStatusString = { statusValue: 'status: Employee Updated', index: EmployeeIndex };
    }
  });
