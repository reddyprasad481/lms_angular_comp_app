 'use strict'
angular.module('header')
	.component('headerComponent',{
		template:'<header><h1>LMS Application</h1>\n'+
        '<nav>\n' +
		'<a ng-link="[\'LeaveRequests\']">Leave Requests</a>\n' +
    	'<a ng-link="[\'Approve\']">Approve</a>\n' +
    	'</nav>\n' +
		'</header>',
		controller:HeaderController
	});

	function HeaderController(appService) {
		var self = this;

	}

	HeaderController.$inject = ['appService'];