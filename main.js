var express = require("express"),
 	http = require("http"),
	fs = require("fs"),
	path = require("path"),
	app = express();
var filePath = "./html/index.html";

app.use("/images", express.static(__dirname + '/public/images'));
app.use("/fonts", express.static(__dirname + '/public/fonts'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/css", express.static(__dirname + '/public/css'));

var router = express.Router();

///*
app.get("/", function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	fs.readFile(filePath, null, function(error, data) {
		if (error) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
		} else {
			response.write(data);
		}
		response.end();
	});
});
//*/

app.listen(9999);
console.log("Server running at http://127.0.0.1:9999/");
