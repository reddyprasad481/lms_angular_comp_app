angular.module('footer')
	.component('footerComponent',{
		template:'<footer>Footer</footer>',
		controller:FooterController
	});

	function FooterController(appService) {
		//var self = this;

        appService.make({endpoint:'customers/getCustomers',method:'GET', data:{}})
			.then(function(response){
				console.log(response);
			},function(error){
				console.log(error);
			});
	}

	FooterController.$inject = ['appService'];