var express = require('express'),
	app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/partials/missions.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/missions.html');
});

app.get('/partials/mission-1.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/mission-1.html');
});

app.get('/partials/mission-2.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/mission-2.html');
});

app.get('/partials/mission-3.html',function(req,res){
	res.sendFile(__dirname + '/client/js/partials/mission-3.html');
});

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(8080,function(){
	console.log('Listening on port 8080');
});