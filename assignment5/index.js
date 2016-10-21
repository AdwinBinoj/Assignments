var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
// var App=angular.module('myapp',[])
// viewed at http://localhost:8080
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/sub.html');
});
router.get('/main',function(req,res){
	 res.sendFile(__dirname + '/main.html');
})
app.listen(3000);
module.exports = router;
// app.post('/process_post', urlencodedParser, function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       firstname:"hai"
//       lastname:"bye"
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })
