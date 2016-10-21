 var App = angular.module('myapp', []);
 App.factory("fact",function(){
  var obj=[];
  var data="";
  obj.set=function(element){
    data=element;
  }
  obj.get=function(){
    return data;
  }
  return obj
});
//controllerstarts
App.controller("MyCtrl1",function($rootScope,$scope,fact){
$scope.task=[{taskname:"Task1",
              taskid:"101"},
              {taskname:"Task2",
              taskid:"102"}]
              fact.set($scope.task);
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
              fact.set($scope.task);

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
App.directive('adwinBinoj', function(){
  return {
    restrict: 'AE',
    transclude : 'element',
    compile : function(element, attr, linker){
      return function($scope, $element, $attr){
        var myLoop = $attr.adwinBinoj,
            match = myLoop.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
            indexString = match[1],
            collectionString = match[2],
            parent = $element.parent(),
            elements = [];

        // $watchCollection is called everytime the collection is modified
        $scope.$watchCollection(collectionString, function(collection){
          var i, block, childScope;

          // check if elements have already been rendered
          if(elements.length > 0){
            // if so remove them from DOM, and destroy their scope
            for (i = 0; i < elements.length; i++) {
              elements[i].el.remove();
              elements[i].scope.$destroy();
            };
            elements = [];
          }

          for (i = 0; i < collection.length; i++) {
            // create a new scope for every element in the collection.
            childScope = $scope.$new();
            // pass the current element of the collection into that scope
            childScope[indexString] = collection[i];

            linker(childScope, function(clone){
              // clone the transcluded element, passing in the new scope.
              parent.append(clone); // add to DOM
              block = {};
              block.el = clone;
              block.scope = childScope;
              elements.push(block);
            });
          };
        });
      }
    }
  }
});