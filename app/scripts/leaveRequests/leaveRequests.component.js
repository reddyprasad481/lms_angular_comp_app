 'use strict'
angular.module('leaveRequests')
	.component('leaveRequestsComponent',{
		template:'<h3>Leave Requests</h3> \n' +
        '<nav>\n' +
		'<a ng-link="[\'LeavesRequestsList\']">All Requests</a>\n' +
    	'<a ng-link="[\'LeaveRequestDetail\']">Request Details</a>\n' +
    	'</nav>\n' +
        '<ng-outlet></ng-outlet>',
		 $routeConfig: [
             {path: '/',    name: 'BlankComponent',   component: 'blankComponent', useAsDefault: true},
            {path: '/allRequests',    name: 'LeavesRequestsList',   component: 'leavesRequestsList'},
            {path: '/details', name: 'LeaveRequestDetail', component: 'leaveRequestDetail'}
        ]
	})

.component('blankComponent', {
    template:'',
    controller: BlankComponentController
  })
.component('leavesRequestsList', {
    template:
      '<h2>all requests will go here</h2>',
    controller: LeavesRequestsListController
  })

.component('leaveRequestDetail', {
    template:
      '<h2>leave Request Detail will go here</h2>',
    controller: LeaveRequestDetailController
  });

	function LeavesRequestsListController(appService) {
		var self = this;

		/*appService.make({endpoint:"assets/products.json",method:"GET"})
			.then(function(response){
				console.log(response);
			},function(error){
				console.log(error);
			});*/

	}

function LeaveRequestDetailController() {
		var self = this;


	}

function BlankComponentController() {
		var self = this;


	}
	LeavesRequestsListController.$inject = ['appService'];