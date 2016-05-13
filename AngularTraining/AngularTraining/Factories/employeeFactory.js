/// <reference path="C:\Users\ravikumar_su.PHOTON\Documents\Visual Studio 2013\Projects\AngularTraining\AngularTraining\app/angular.intellisense.js" />

'use strict';
angular.module('EmployeeDB').factory('employeeFactory', function()
{
    return {
        HistoryItems : [],
        EmployeeArray: [{id:0, name: 'ravi', role: 'architect', projectDetails: { project: 'cpd', projectLocation: 'bangalore' }}, {id:1, name: 'lokesh', role: 'lead', projectDetails: { project: 'ppd', projectLocation: 'chennai' }}, {id:2, name: 'shiva', role: 'dev', projectDetails: { project: 'Packaging', projectLocation: 'USA' }}]
        ,
        DisableUpdateProfile: true,
        EmployeeStatusString: {statusValue:'', empId:'', junk:''},        
        UpdateEmployeeValue: function (employee, e) {
            var empObj = this.GetEmployeeById(e) //EmployeeArray[e];
            empObj.name = employee.name;
            empObj.role = employee.role;
            empObj.projectDetails.project = employee.projectDetails.project;
            empObj.projectDetails.projectLocation = employee.projectDetails.projectLocation;
        },
        AddArrayValue: function (e) {
            var employee1 = { id: e.id, name: e.name, role: e.role, projectDetails: { project: e.projectDetails.project, projectLocation: e.projectDetails.projectLocation }};
            this.EmployeeArray.push(employee1);
        },
        AddHistoryItem: function (historyItem) {
            var historyItem1 = { value: historyItem.value, junk: historyItem.junk};
            this.HistoryItems.push(historyItem1);
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
            this.EmployeeStatusString.empId = statusObject.empId;
            this.EmployeeStatusString.junk = Math.random(1000);
        },
        GetEmployeeById: function (id){
            for (var i = 0, len = this.EmployeeArray.length; i < len; i++) {
                var employee1 = this.EmployeeArray[i];
                if (employee1.id == id)
                    return this.EmployeeArray[i];
            }
        }        
    };
});
