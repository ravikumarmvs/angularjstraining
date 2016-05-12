/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

angular.module('loginDB').controller('loginCtrl', function ($rootScope, $scope, $state, employeeFactory) {

    $rootScope.isLoginPage = true;
    $scope.login = function (userName, password) {
        $rootScope.applicationUserName = userName;
        $state.go('employeeEntry');
    }
});
