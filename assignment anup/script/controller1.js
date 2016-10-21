App.controller("MyCtrl1",['$scope','$rootScope','$uibModal','$translatePartialLoader','$translate','fact',function ($scope,$rootScope,$uibModal,$translatePartialLoader,$translate,fact){
   $translatePartialLoader.addPart('language');
   $translate.refresh();
   $rootScope.language="English";
   $translate.use($rootScope.language); 
$rootScope.task=[{taskname:"Task1",
              taskid:"101"},
              {taskname:"Task2",
              taskid:"102"}]
              fact.pass($rootScope.task);
 $scope.addoption=function(){
 var modalInstance = $uibModal.open({
      controller: 'MyCtrl2',
      templateUrl: 'popup.html',
                });
 }
 $scope.remove=function(enteredid){
    for (var i = 0; i < $rootScope.task.length; i++) {
      if($rootScope.task[i].taskid == enteredid){
        $rootScope.task.splice(i , 1);
          fact.pass($rootscope.task);
      }
    }

}

$scope.change=function(lan){
       $translate.use(lan);
       $rootScope.language=lan; 
 }
$rootScope.task=fact.passdata();
}]);//controller ends