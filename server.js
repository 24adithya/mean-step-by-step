var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    console.log('Incoming request to ' + req.url);
    var i = 2;
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	console.log('Request time is = ' + hour + ':' + minute + ':' + second );
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    setTimeout(function() {
    	currentDate = new Date();
    	hour = currentDate.getHours();
    	minute = currentDate.getMinutes();
    	second = currentDate.getSeconds();
    	console.log('Execution time is = ' + hour + ':' + minute + ':' + second );

        fs.readFile(__filename, {
            encoding: 'utf8'
        }, function(error, contents) {
            if (error) {
                console.error(error);
                return res.end();
            }
            console.log('sending response for ' + req.url);
            currentDate = new Date();
            hour = currentDate.getHours();
            minute = currentDate.getMinutes();
	    	second = currentDate.getSeconds();
	    	console.log('Response time is = ' + hour + ':' + minute + ':' + second );
            res.end(contents);
        });
    }, 15000);

    while (i--) {
        console.log('Loop value: ' + i + '\r');
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/*var connect = require('connect'),
    serveStatic = require('serve-static');

	var app = connect();

app.use(serveStatic("angularjs"));
app.listen(5000);*/
