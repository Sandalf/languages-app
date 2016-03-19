var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	usersController = require('./server/controllers/users-controller');

mongoose.connect('mongodb://localhost:27017/user-test-2');

app.use(bodyParser());

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/partials/missions.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/missions.html');
});

app.get('/partials/missions/mission-1.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/missions/mission-1.html');
});

app.get('/partials/missions/mission-2.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/missions/mission-2.html');
});

app.get('/partials/missions/mission-3.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/missions/mission-3.html');
});

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/users', usersController.list);

app.listen(8080,function(){
	console.log('Listening on port 8080');
});