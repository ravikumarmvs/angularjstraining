/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

(function () {
    'user strict'
    var activityController = angular.module('activityDB').controller('activityCtrl', activityFunciton);
    activityController.$inject = ['$scope','activityService'];
    function activityFunciton($scope, activityService) {
        var vm = this;
        vm.activities = activityService.getActivity();
        $scope.$on('onAddingActivity', function (event, data) {
            console.log('data sent by parent (employee) controller -> ' + data.value);
            activityService.addActivity(data);
            // now send a message to parent, that message is received.
            $scope.$emit('onSuccess', data);
        });
    }
})();

