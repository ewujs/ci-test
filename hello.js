const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Heroku!\n');
});

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`));