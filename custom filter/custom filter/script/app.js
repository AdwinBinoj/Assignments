 var App = angular.module('myapp', []);
//controllerstarts
App.controller("MyCtrl1",function($rootScope,$scope){
$scope.task=[{taskname:"Task1",
              taskid:"101"},
              {taskname:"Task2",
              taskid:"102"}]
 $scope.addinginput="false";
 $scope.addbutton="true";
 $scope.addoption=function(){
 $scope.addinginput="true";
 $scope.addbutton="false";
 }
 $scope.canceloption=function(){
 $scope.addinginput="false";
 $scope.addbutton="true";
 }
 $scope.addtask=function(){
  $scope.count=0;
  for (var i = 0; i < $scope.task.length; i++) {
    if($scope.task[i].taskid == $scope.newtaskid){
      $scope.count=1;
    }
  }
  if ($scope.count!=1) {
    if ($scope.newtaskid == undefined || $scope.newtaskname == undefined) {
      alert("Id column or name column is empty");
    }
    else{
      if ( isNaN($scope.newtaskid)) {
        alert("id should be only in numbers")
      }
      else{
    $scope.newtask={taskname:$scope.newtaskname,
              taskid:$scope.newtaskid};
              $scope.task.push($scope.newtask);
            }
            }
  }
  else{
    alert("it is already in the list")
  }
 }
 $scope.remove=function(enteredid){
    for (var i = 0; i < $scope.task.length; i++) {
      if($scope.task[i].taskid == enteredid){
        $scope.task.splice(i , 1);
      }
    }

 }
});//controller ends