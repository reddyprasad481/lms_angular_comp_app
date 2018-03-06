 'use strict'
angular.module('leaveRequests')
	.component('leaveRequestsComponent',{
		template:'Leave Requests',
		controller:LeaveRequestsController
	});

	function LeaveRequestsController(appService) {
		var self = this;

		/*appService.make({endpoint:"assets/products.json",method:"GET"})
			.then(function(response){
				console.log(response);
			},function(error){
				console.log(error);
			});*/

	}

	LeaveRequestsController.$inject = ['appService'];