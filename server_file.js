let http = require('http');
var myHtml = 
<html>
    <head>
        <title>hy form</title>
    </head>
    <body>
        <form action="/message" method="post">
        <label for="message"> Please enter a message below:</label> <br/><br/>
        <textarea  rows="4" cols="50" name="message" id="message" >
        where user submits their message
            </textarea><br/><br/>
        <input type="submit" value="Submit button"/>
        </form>

    </body>
</html>;

 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(myHtml);
    response.end(myHtml);
};
 
http.createServer(handleRequest).listen(8080);