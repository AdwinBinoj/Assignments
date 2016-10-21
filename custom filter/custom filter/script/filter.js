App.filter('search1', function() {
 return function(arr, search){
        if(!search){
            return arr;
        }
        var result = [];
        search = search.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.taskname.toLowerCase().indexOf(search) !== -1){
            result.push(item);
        }
        });
        return result;
    }
});