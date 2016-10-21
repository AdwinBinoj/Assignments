 var App = angular.module('myapp', ['ui.bootstrap','pascalprecht.translate']);
//controllerstarts
App.config(['$translateProvider','$translatePartialLoaderProvider', function ($translateProvider,$translatePartialLoaderProvider){
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'json/language/{lang}.json'
        });

    }]);

App.factory("fact",function(){
  var obj=[];
  var maindata=[];
  var element=null;

  obj.pass=function(data){
    maindata=data;
  }
  obj.passdata=function(){
    return maindata;
  }
   return obj;
});  