var http = require("http");
var fs = require("fs");
var filePath = "./html/index.html";

function onRequest(request, response) {
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
}

http.createServer(onRequest).listen(9999);

// Console will print the message
console.log("Server running at http://127.0.0.1:9999/");