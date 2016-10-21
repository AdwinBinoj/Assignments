App.service('mytodo', function() {
    var enter="";
  this.enterid=function(enteredid){
    enter=enteredid;
  }
 this.getid=function(){
    return enter;
  }
});