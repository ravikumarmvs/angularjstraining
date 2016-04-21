'use strict';
angular.module('EmployeeDB').factory('employeeFactory', function()
{
  return {
    sharedProfile:
    {
      firstName:  'default name',
      empRole: 'default role',
      project: 'initial project'
  },
  updateSharedProfile : function(newEmployee){
    this.sharedProfile.firstName = newEmployee.name;
    this.sharedProfile.empRole = newEmployee.role;
  }
};
});
