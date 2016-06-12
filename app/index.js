var http = require("http"),
		url = require("url"),
		path = require("path"),
		fs = require("fs"),
		bodyParser = require('body-parser'),
		express = require("express"),
		port = process.argv[2] || 8888;

app = express();

app.use(express.static('static'));

api_router = express.Router();
api_router.use(bodyParser.json());

api_router.post('/submit', function(req, res){
	var data = req.body;
	console.log('test', data)
	res.json({status: 'ok'})
});

app.use('/api', api_router);

app.listen(port);
