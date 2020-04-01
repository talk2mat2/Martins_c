let http = require('http');
var fs = require('fs')
var myHtml = '<html><head><title>hy form</title></head><body><form action="/message" method="post"><label for="message"> Please enter a message below:</label> <br/><br/><textarea rows="4" cols="50" name="message" id="message"placeholder="Describe yourself here..."></textarea><br/><br/><input type="submit" value="Submit button"/></form></body></html ';

let handleRequest = (req, res) => {
    if (req.method === 'POST') {
       
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        req.on('end', () => {
            fs.appendFileSync('message.txt',body+'\r\n');
            res.end(myHtml)
        });
    }
    else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(myHtml);
        res.end();
    }
};

http.createServer(handleRequest).listen(8080);
