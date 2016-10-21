describe('MyCtrl2', function() {
  beforeEach(module('myapp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
describe('$scope.addtask', function() {
    it('values added or not', function() {
      var $scope = {};
       var modalInstance = {          
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
      var controller = $controller('MyCtrl2', { $scope: $scope, $uibModalInstance: modalInstance });
      $scope.newtaskid = '234';
      $scope.newtaskname='abcds';
      $scope.addtask();
     expect($scope.data).toEqual(jasmine.objectContaining([Object({taskname:'abcds',taskid: '234'})])); 
    });
});
 }); 
describe('MyCtrl1', function() {
  beforeEach(module('myapp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
describe('$scope.remove', function() {
    it('values removed or not', function() {
      var $scope = {};
      var controller = $controller('MyCtrl1', { $scope: $scope });
      $scope.newtaskid = '234';
      $scope.newtaskname='abcds';
      $scope.remove();
     expect($scope.data).not.toEqual(jasmine.objectContaining([Object({taskname:'abcds',taskid: '234'})])); 
    });
});
 }); 

