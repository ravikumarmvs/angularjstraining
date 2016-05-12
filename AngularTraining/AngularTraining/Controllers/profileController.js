/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

angular.module('ProfileDB').controller('EmployeeProfileCtrl', function ($rootScope, $scope, $state, $stateParams, employeeFactory) {
    $rootScope.isLoginPage = false;
    $scope.currentEmployee = employeeFactory.GetEmployeeById($stateParams.id);
    var loadedEmployee = { name: $scope.currentEmployee.name, role: $scope.currentEmployee.role, projectDetails: { project: $scope.currentEmployee.projectDetails.project, projectLocation: $scope.currentEmployee.projectDetails.projectLocation }, index: $scope.currentEmployee.index };
    $scope.DisableUpdation = function () {        
        if (employeeFactory.compareEmployeeObject(loadedEmployee, $scope.currentEmployee))
            return true;
        return !$scope.currentEmployee.name || !$scope.currentEmployee.role || !$scope.currentEmployee.projectDetails.project || !$scope.currentEmployee.projectDetails.projectLocation || employeeFactory.DisableUpdateProfile;
    }
    $scope.updateEmployees = function (currentEmployee) {        
        var newEmployee = { name: currentEmployee.name, role: currentEmployee.role, projectDetails: { project: currentEmployee.projectDetails.project, projectLocation: currentEmployee.projectDetails.projectLocation }};

        $rootScope.rootHistoryItems.push({ name: currentEmployee.name + " profile changed", indexValue: currentEmployee.id });

        employeeFactory.UpdateEmployeeValue(newEmployee, currentEmployee.id);
        employeeFactory.UpdateEmployeeStatusString({ statusValue: 'status: Employee Updated', empId: currentEmployee.id });
        $state.go('employeeEntry');
    }
  });
