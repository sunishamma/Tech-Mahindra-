angular.module('progress', ['ui.bootstrap']);
var ProgressDemoCtrl = function ($scope) {

  var vm = this;
  $scope.max = 100;
  
  
   $scope.products = [{
    value: 'd1',
    label: '#Progress 1',
	 width : 10,
	 view : 10
  }, {
    value: 'd2',
    label: '#Progress 2',
	 width : 70,
	 view: 70
  },
   ]; 
   
    $scope.productList= $scope.products[0];  
  
    

  $scope.progress = function(id,operate){
	 
var did= $scope.productList.value;


var full =$scope.products;
for (var i = 0; i < full.length ; i++) {
       if(full[i].value==did)
	   {
		  
		   if((operate=='+'))
			{  
			if(($scope.products[i].width + id)<210)
			{
				 console.log($scope.products[i].width + id);
				$scope.products[i].width =$scope.products[i].width + id;
				if($scope.products[i].width>100)
				{
					$scope.products[i].view=100;
				}
				else
				{
					$scope.products[i].view=$scope.products[i].width;
				}
			}
			}
			else  if($scope.products[i].width - id>0)
			{
				$scope.products[i].width =$scope.products[i].width - id;
				
				if($scope.products[i].width>100)
				{
					$scope.products[i].view=100;
				}
				else
				{
					$scope.products[i].view=$scope.products[i].width;
				}
			}
			var divid=$scope.products[i].value;
			if($scope.products[i].width>100)
			{
				document.getElementById(''+divid+'').className += ' progress-warning';
			}
			else
			{
				 document.getElementById(''+divid+'').classList.remove("progress-warning");
			}
			
			break;
	   }
 }

		
	
  };
};