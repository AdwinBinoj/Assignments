var App = angular.module('myapp', ['ngRoute']);
App.config(function($routeProvider) {

  $routeProvider.when('/todoMain', {
    templateUrl: 'partials/todoMain.html', 
    controller: 'todoController'
  }).when('/todoView', {
    templateUrl: 'partials/todoView.html', 
    controller: 'todoDetailsController'
  }).otherwise({
    redirectTo: '/todoMain'
  });
});

App.run(function(todoData) {
todoData.element(0);
});

 