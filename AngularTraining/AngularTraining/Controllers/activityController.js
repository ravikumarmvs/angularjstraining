/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

angular.module('activityDB').controller('activityCtrl', function ($rootScope, $scope, $state, $stateParams, employeeFactory) {
    'user strict'
    $scope.activities = employeeFactory.HistoryItems;
    $scope.$on('onAddingActivity', function (event, data) {
        console.log('data sent by parent (employee) controller -> ' + data.value);
        employeeFactory.AddHistoryItem(data);
        // now send a message to parent, that message is received.
        $scope.$emit('onSuccess', data);
    });
  });
