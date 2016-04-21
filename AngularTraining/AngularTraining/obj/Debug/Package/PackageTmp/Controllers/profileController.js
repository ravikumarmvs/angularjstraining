angular.module('ProfileDB').controller('EmployeeProfile', function ($scope, employeeFactory) {
  $scope.currentEmployee = employeeFactory.sharedProfile;
  });
