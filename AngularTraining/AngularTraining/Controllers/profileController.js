/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

angular.module('ProfileDB').controller('EmployeeProfileCtrl', function ($rootScope, $scope, $location, $routeParams, employeeFactory) {
    $rootScope.isLoginPage = false;
    $scope.currentEmployee = employeeFactory.GetEmployeeById($routeParams.id); //employeeFactory.sharedProfile;
    $scope.DisableUpdation = function () {
        if (employeeFactory.compareEmployeeObject(undefined, employeeFactory.sharedProfile))
            return true;
        return !$scope.currentEmployee.name || !$scope.currentEmployee.role || !$scope.currentEmployee.projectDetails.project || !$scope.currentEmployee.projectDetails.projectLocation || employeeFactory.DisableUpdateProfile;
    }
    $scope.updateEmployees = function (currentEmployee) {
        //var newEmployee = { name: employeeFactory.sharedProfile.name, role: employeeFactory.sharedProfile.role, projectDetails: { project: employeeFactory.sharedProfile.projectDetails.project, projectLocation: employeeFactory.sharedProfile.projectDetails.projectLocation }, index:employeeFactory.sharedProfile.index };
        var newEmployee = { name: currentEmployee.name, role: currentEmployee.role, projectDetails: { project: currentEmployee.projectDetails.project, projectLocation: currentEmployee.projectDetails.projectLocation }, index: currentEmployee.index };

        $rootScope.rootHistoryItems.push({ name: currentEmployee.name + " profile changed", indexValue: currentEmployee.id });

        employeeFactory.UpdateEmployeeValue(newEmployee, currentEmployee.id);
        employeeFactory.UpdateEmployeeStatusString({ statusValue: 'status: Employee Updated', index: currentEmployee.id });
        $location.path('/employeeEntry');
    }
  });
