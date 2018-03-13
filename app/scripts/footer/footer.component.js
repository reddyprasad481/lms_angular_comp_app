angular.module('footer')
	.component('footerComponent',{
		templateUrl:'scripts/footer/footer.html',
		controller:FooterController
	});

	function FooterController(appService) {
		//var self = this;
        var $ctrl = this;
        $ctrl.pdfData =null;
        appService.make({endpoint:'customers/getCustomers',method:'GET', data:{}})
			.then(function(response){
				console.log(response);
             $ctrl.pdfData =  response; 
            console.log($ctrl.pdfData);
          //  var pdfUrl = URL.createObjectURL(response);
          //  var printwWindow = $window.open(pdfUrl);
           // printwWindow.print();
            
			},function(error){
				console.log(error);
			});

          this.printPdf = function() {
            
              var pdfForm = document.getElementById('pdfForm');
              
              pdfForm.action ='http://localhost:8080/spring_rest_services/service/customers/getpdfForInput';
                  
             pdfForm.method='POST';
              //pdfForm.body =99;//$ctrl.pdfData.data;
              console.log($ctrl.pdfData.data);
              pdfForm.submit();

          };
	}

	FooterController.$inject = ['appService'];