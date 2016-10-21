App.controller("todoListController",function($scope,todoData){
todoData.getdata().success(function(data) {
$scope.addtask=function(){
    $scope.data=todoData.passdata();
      console.log($scope.data);
  $scope.count=0;
  for (var i = 0; i < $scope.data.length; i++) {
    if($scope.data[i].taskid == $scope.newtaskid){
      $scope.count=1;
    }
  }
  if ($scope.count!=1) {
    if ($scope.newtaskid == undefined || $scope.newtaskname == undefined || $scope.newtaskdetails == undefined) {
      alert("Id column or name column is empty");
    }
    else{
      if ( isNaN($scope.newtaskid)) {
        alert("id should be only in numbers")
      }
      else{
    $scope.newtask={taskname:$scope.newtaskname,
              taskid:$scope.newtaskid,taskdetails:$scope.newtaskdetails,
              endtime:$scope.newtasktime};
              $scope.task.push($scope.newtask);
              todoData.pass($scope.task);
              $scope.$parent.newtaskname=undefined;
              $scope.$parent.newtaskid=undefined;
              $scope.newtaskdetails="";
              $scope.newtasktime="";
            }
            }
  }
  else{
    alert("it is already in the list")
  }

  
 }
});
});