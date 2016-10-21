App.controller("todoDetailsController",function($scope,todoData,$location,mytodo){ 
  // $scope.ele=1;
 todoData.element(1);
 $scope.viewid=mytodo.getid();
 $scope.data=todoData.passdata();
for (var i = 0; i < $scope.data.length; i++) {
  if($scope.data[i].taskid==$scope.viewid){
    $scope.heading=$scope.data[i].taskname;
    $scope.contents=$scope.data[i].taskdetails;
    $scope.timeout=$scope.data[i].endtime;
  }
}
$scope.back=function(){
    $location.path("/todoMain"); 
}
todoData.null();
}); 