 'use strict'
angular
  .module('lmsApp')
  	.component('appComponent',{
  		template:'<header-component></header-component>\n'+
      '<div>LMSApp</div><nav>\n' +
    	'<ng-outlet></ng-outlet><footer-component></footer-component>\n',
    	controller:AppController,
    	$routeConfig: [
    		{path: '/leaveRequests', name: 'LeaveRequests', component: 'leaveRequestsComponent', useAsDefault: true},
    		{path: '/approve', name: 'Approve', component: 'approveComponent' }
  		]
  	});

  	function AppController() {
  		var self  = this;
  	}