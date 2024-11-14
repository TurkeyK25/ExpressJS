const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Nodejs - Bai 1</h1>');
    res.write('<br>');
    res.write('<p>Tạo project HelloWorld bằng NodeJS-hihi</p>');
    res.write(`<h1>Content 1</h1>
    <h2>Content 2</h2>
    <p>Content 3</p>`);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});