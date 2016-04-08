function Data_res($scope){
	$scope.vals = [
				{title:"刘迪的百科全书",app:9,price:100},
				{title:"钢铁是怎么炼成的",app:2,price:34},
				{title:"维基百科",app:3,price:15},
				{title:"你好——word",app:7,price:78}
				];
	$scope.remove = function(i){
		$scope.vals.splice(i,1);
	}
}