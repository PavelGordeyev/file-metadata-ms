const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

// Sets port & hostname if running on either heroku or local machine
const port = parseInt(process.env.PORT, 10) || 8080;
const hostname = parseInt(process.env.PORT, 10) ? '0.0.0.0' : '127.0.0.1';

// Set public directory
app.use('/static', express.static(__dirname + './public'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended: true
}));

// Set jade engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Render the form
app.get('/', function(req, res){
	res.render('index');
});

// Return the file size stored in req.file
app.post('/', multer({ dest: 'uploads/' }).single('file'), function(req,res){
	var fileObj = {"fileSize": req.file.size};

	res.setHeader('Content-Type', 'application/json');

	res.send(JSON.stringify(fileObj));
});

// Listen to specified port 
app.listen(port, hostname, function() {
	console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
});