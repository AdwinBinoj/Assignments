 App.controller("MyCtrl2",['$rootScope','$scope','$translate','fact','$uibModalInstance',function ($rootScope,$scope,$translate,fact,$uibModalInstance) {
  $translate.use($rootScope.language);
 $scope.addtask=function(){
  $scope.count=0;
  $scope.data=fact.passdata();
  for (var i = 0; i < $scope.data.length; i++) {
    if($scope.data[i].taskid == $scope.newtaskid){
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
              $scope.data.push($scope.newtask);
              fact.pass($scope.data);
              $scope.newtaskid="";
              $scope.newtaskname="";
            }
            }
  }
  else{
    alert("it is already in the list")
  }
 }
 $scope.canceloption=function(){
 $uibModalInstance.dismiss('cancel');
 }
}]);