var App = angular.module('myapp', ['ngRoute']);
App.config(function($routeProvider) {

  $routeProvider.when('/screen1', {
    templateUrl: 'partials/screen1.html', 
    controller: 'MyCtrl1'
  }).when('/screen2', {
    templateUrl: 'partials/screen2.html', 
    controller: 'MyCtrl2'
  }).otherwise({
    redirectTo: '/screen1'
  });
});

App.run(function(fact) {
fact.element(0);
});

 //Factory
App.factory("fact",function($http){
  var obj=[];
  var maindata=[];
  var element=null;
  obj.getdata=function(){
    return $http.get('json/data.json');
  }
  
  obj.pass=function(data){
    maindata=data;
  }
  obj.passdata=function(){
    return maindata;
  }
 
  obj.null=function(){
    return enter="";
  }
  obj.element=function(num){
    element=num;
  }
  obj.getelement=function(){
    return element;
  }
  return obj;
});  
//factory ends
//service starts
App.service('mytodo', function() {
    var enter="";
  this.enterid=function(enteredid){
    enter=enteredid;
  }
 this.getid=function(){
    return enter;
  }
});
//controller 1 starts
App.controller ("MyCtrl1", function($scope,$location,fact,mytodo){
  fact.getdata().success(function(data) {
     if(fact.getelement()==1){
    $scope.task=fact.passdata();
  }
  else{
    fact.pass(data);
    $scope.task=fact.passdata();
  }
  console.log($scope.task);
  $scope.addinginput="false";
 $scope.addbutton="true";
 $scope.addoption=function(){
 $scope.addinginput="true";
 $scope.addbutton="false";
 $scope.next="true";
 $scope.child="false";
 }
 $scope.canceloption=function(){
 $scope.addinginput="false";
 $scope.addbutton="true";
 }
 $scope.remove=function(enteredid){
    for (var i = 0; i < data.length; i++) {
      if($scope.task[i].taskid == enteredid){
        $scope.task.splice(i , 1);
        fact.pass($scope.task);
      }
    }
  }
$scope.view=function(enteredid){
 mytodo.enterid(enteredid);
 console.log("enteredid"+enteredid);
   $location.path("/screen2");    
      }
     $scope.nextcont=function(){
      $scope.next="false";
      $scope.child="true"
}
}); //json success function ends
});//first controller ends

//CHILD CONTROLLER STARTS
App.controller("MyCtrl11",function($scope,fact){
fact.getdata().success(function(data) {
$scope.addtask=function(){
    $scope.data=fact.passdata();
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
              fact.pass($scope.task);
            }
            }
  }
  else{
    alert("it is already in the list")
  }
 }
});
});
//second controoler starrts
App.controller("MyCtrl2",function($scope,fact,$location,mytodo){ 
  // $scope.ele=1;
 fact.element(1);
 $scope.viewid=mytodo.getid();
 $scope.data=fact.passdata();
for (var i = 0; i < $scope.data.length; i++) {
  if($scope.data[i].taskid==$scope.viewid){
    $scope.heading=$scope.data[i].taskname;
    $scope.contents=$scope.data[i].taskdetails;
    $scope.timeout=$scope.data[i].endtime;
  }
}
$scope.back=function(){
    $location.path("/screen1"); 
}
fact.null();
}); 
//controller 2 ends
// App.controller("MyCtrl2",function(fact){ 
 
// }); 