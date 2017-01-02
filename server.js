var express = require('express');
var app = express();

var PORT = 3000

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private root hit');
		next();

	},
	logger: function (req, res, next){
		console.log(new Date().toString() +' ' +req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('hello moron!')

});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function (){
	console.log('express started moron on port: '+ PORT);

});