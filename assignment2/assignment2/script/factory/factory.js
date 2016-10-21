App.factory("todoData",function($http){
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