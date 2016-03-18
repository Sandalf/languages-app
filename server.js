var express = require('express'),
	app = express();

app.get('/',function(req,res){
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(8080,function(){
	console.log('Listening on port 8080');
});