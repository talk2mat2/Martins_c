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

 
let handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(myHtml);
    res.end();
};
 
http.createServer(handleRequest).listen(8080);
