const express = require('express');

const app = express();

const port = 8080;
const hostname = '127.0.0.1';

app.use('/static', express.static(__dirname + '/scripts'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(port, hostname, function() {
	console.log("The frontend server is running on port %d!",port);
});