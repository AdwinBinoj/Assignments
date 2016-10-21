App.controller ("todoController", function($scope,$location,todoData,mytodo){
  todoData.getdata().success(function(data) {
     if(todoData.getelement()==1){
    $scope.task=todoData.passdata();
  }
  else{
    todoData.pass(data);
    $scope.task=todoData.passdata();
  }
  console.log($scope.task);
  $scope.addinginput="false";
 $scope.addbutton="true";
 $scope.addoption=function(){
    $scope.search="";
  $location.path("/todoMain"); 
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
        todoData.pass($scope.task);
      }
    }
  }
$scope.view=function(enteredid){
 mytodo.enterid(enteredid);
 console.log("enteredid"+enteredid);
   $location.path("/todoView");    
      }
     $scope.nextcont=function(){
      $scope.next="false";
      $scope.child="true"
}
}); 
});