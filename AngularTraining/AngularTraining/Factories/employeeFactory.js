/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

'use strict';
angular.module('EmployeeDB').factory('employeeFactory', function()
{
    return {
        sharedProfile: {
            name: 'default name',
            role: 'default role',
            projectDetails: {
                project: 'initial project',
                projectLocation: 'Initial Project Location'
            },
            index: ''
        },
        EmployeeArray: [{id:0, name: 'ravi', role: 'architect', projectDetails: { project: 'cpd', projectLocation: 'bangalore' }, index: 0 }, {id:1, name: 'lokesh', role: 'lead', projectDetails: { project: 'ppd', projectLocation: 'chennai' }, index: 1 }, {id:2, name: 'shiva', role: 'dev', projectDetails: { project: 'Packaging', projectLocation: 'USA' }, index: 2 }]
        ,
        DisableUpdateProfile: true,
        EmployeeStatusString: {statusValue:'', index:'', junk:''},
        updateSharedProfile: function (newEmployee, indexValue) {
            if (newEmployee != undefined) {
                this.sharedProfile.name = newEmployee.name;
                this.sharedProfile.role = newEmployee.role;
                this.sharedProfile.projectDetails.project = newEmployee.projectDetails.project;
                this.sharedProfile.projectDetails.projectLocation = newEmployee.projectDetails.projectLocation;
                this.sharedProfile.index = indexValue;
            }
            else {
                this.sharedProfile.name = 'default name',
                this.sharedProfile.role = 'default role',
                this.sharedProfile.projectDetails.project = 'initial project',
                this.sharedProfile.projectDetails.projectLocation = 'Initial Project Location'
            }
        },
        UpdateEmployeeValue: function (employee, e) {
            var empObj = this.EmployeeArray[e];
            empObj.name = employee.name;
            empObj.role = employee.role;
            empObj.projectDetails.project = employee.projectDetails.project;
            empObj.projectDetails.projectLocation = employee.projectDetails.projectLocation;
            this.updateSharedProfile(employee, e);
        },
        AddArrayValue: function (e) {
            var employee1 = { id: e.id, name: e.name, role: e.role, projectDetails: { project: e.projectDetails.project, projectLocation: e.projectDetails.projectLocation }, index:e.index };
            this.EmployeeArray.push(employee1);
        },
        DisableEmployeeProfileUpdationButton: function (updateOrNot) {
            this.DisableUpdateProfile = updateOrNot;
        },
        compareEmployeeObject: function (employee1, profileEmployee) {
            if (employee1 === undefined) {
                // This is when the employee object should be compared to entire employeeArray
                for (var i = 0, len = this.EmployeeArray.length; i < len; i++) {
                    employee1 = this.EmployeeArray[i];
                    if ((employee1.name == profileEmployee.name) && (employee1.role == profileEmployee.role) && (employee1.projectDetails.project == profileEmployee.projectDetails.project) && (employee1.projectDetails.projectLocation == profileEmployee.projectDetails.projectLocation))
                        return true;
                }
            }
            else {
                return ((employee1.name == profileEmployee.name) && (employee1.role == profileEmployee.role) && (employee1.projectDetails.project == profileEmployee.projectDetails.project) && (employee1.projectDetails.projectLocation == profileEmployee.projectDetails.projectLocation));
            }
        },
        UpdateEmployeeStatusString: function (statusObject) {
            this.EmployeeStatusString.statusValue = statusObject.statusValue;
            this.EmployeeStatusString.index = statusObject.index;
            this.EmployeeStatusString.junk = Math.random(1000);
        }
    };
});
