const PORT_NUMBER = 5000;
var express = require("express");
var parser = require("ua-parser-js");
var app = express();
app.enable('trust proxy');

app.get("/", function(req,res){
	var ua = parser(req.headers['user-agent']);
	var result = {
		ipaddress : req.ip,
		language : req.acceptsLanguages()[0],
		software : ua.os.name
	}
	res.writeHead(200, { 'Content-Type': 'application/json' });   
	res.end(JSON.stringify(result));
});

app.listen(process.env.PORT || PORT_NUMBER);
console.log("listening at port " + PORT_NUMBER);