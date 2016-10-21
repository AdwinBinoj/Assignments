var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();
// var App=angular.module('myapp',[])
// viewed at http://localhost:8080

var MongoClient = require('mongodb').MongoClient ;
var url= "mongodb://Test:adwin@ds051605.mlab.com:51605/details" 
MongoClient.connect(url, function(err, db) {
 console.log("connect")

  //  var uc = db.collection('userdata');
  // uc.insert({name: 'renji', password:'renji'}, function(err, result) {
  //  console.log("inserted");
  // })
}); 
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// router.get('/', function(req, res) {
//     res.sendFile(__dirname + '/sub.html');
// });
// router.get('/main',function(req,res){
// 	 res.sendFile(__dirname + '/main.html');
// })
app.listen(3000);
// module.exports = router;