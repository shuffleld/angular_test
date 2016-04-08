var global_val = {
	title:'你好Angular',
	'xx':222
}
// function Data_res($scope){
// 	$scope.global_val = global_val;
// 	$scope.vals = [
// 				{title:"刘迪的百科全书",app:9,price:100},
// 				{title:"钢铁是怎么炼成的",app:2,price:34},
// 				{title:"维基百科",app:3,price:15},
// 				{title:"你好——word",app:7,price:068}
// 				];
// 	$scope.remove = function(i){
// 		$scope.vals.splice(i,1);
// 	}
// }
var global_model = angular.module('MyApp',[]);

global_model.controller('Data_res',function($scope){
		$scope.global_val = global_val;
	$scope.vals = [
				{title:"刘迪的百科全书",app:1,price:100},
				{title:"钢铁是怎么炼成的",app:1,price:34},
				{title:"维基百科",app:1,price:15},
				{title:"你好——word",app:1,price:068}
				];
	$scope.remove = function(i){
		$scope.vals.splice(i,1);
	}
});
global_model.controller('FormTest',function($scope){
	$scope.check_in  = false;
	$scope.do_change = function(){
		$scope.a = $scope.do_model.bb * 2;
	}
	$scope.do_model = {bb:0}
})


