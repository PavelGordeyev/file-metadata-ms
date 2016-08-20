const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Sets port & hostname if running on either heroku or local machine
const port = parseInt(process.env.PORT, 10) || 8080;
const hostname = parseInt(process.env.PORT, 10) ? '0.0.0.0' : '127.0.0.1';


app.use('/static', express.static(__dirname + './public'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended: true
}));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/form', function(req, res){
	res.render('index');
});

app.post('/form', function(req,res){
	console.log("file:",req.body);
	res.send({status: 'SUCCESS'});
});

app.listen(port, hostname, function() {
	console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
});