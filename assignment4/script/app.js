var App = angular.module('myapp', ['ui.router']);
App.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/Home.html'
        })
        .state('Details', {
        	url: '/Details',
            templateUrl: 'partials/Details.html' 
        });
        
});

 