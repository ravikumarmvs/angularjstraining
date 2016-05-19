/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

'use strict';
(function () {
    angular.module('EmployeeDB').service('activityService', myservice);
    function myservice() {
        var activities = [];

        this.addActivity = function (activity) {
            activities.push({ value: activity.value, junk: activity.junk });
        };

        this.getActivity = function () {
            return activities;
        };
    }
})();

