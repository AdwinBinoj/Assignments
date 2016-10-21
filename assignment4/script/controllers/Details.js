App.controller("Details",function($scope,Data){ 
	Data.getdata().success(function(data) {
	$scope.viewid=Data.getid();
for (var i = 0; i <data.length; i++) {
  if(data[i].Gameid==$scope.viewid){
    $scope.Name=data[i].Gamename;
    $scope.id=data[i].Gameid;
    $scope.detail=data[i].Gamedetails;
  }
}
Data.null();
});
}); 