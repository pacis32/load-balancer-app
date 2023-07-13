const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');

    const message = "MSG "

    res.end(message);


});



server.listen(port, () => {

    console.log(`Server 1 running on ${port}`);




});
