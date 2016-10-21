App.factory("Data",function($http){
  var obj=[];
  var Game=0;
  obj.getdata=function(){
    return $http.get('json/data.json');
  } 
  obj.pass=function(id){
  	Game=id;
  }
  obj.getid=function(){
  	return Game;
  }
  obj.null=function(){
  	Game=0;
  }
  return obj;
});  