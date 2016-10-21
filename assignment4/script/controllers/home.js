App.controller ("home", function($scope,Data){
Data.getdata().success(function(data) {
	$scope.games=data;
	$scope.img1="assets/images/game1.jpg"
	$scope.img2="assets/images/game2.jpg"
	$scope.passdetails=function(id){
		Data.pass(id);
	}
	$scope.img=function(img11){
  for (var i = 0; i <data.length; i++) {
  if(data[i].Gameid==img11){
    $scope.img1=data[i].img1;
    $scope.img2=data[i].img2;
  }
}
	}
});
});