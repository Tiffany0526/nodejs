// 第一個區塊 內建模組
const path = require('path');
// const http = require('http');

// 第二個區塊 第三方模組(套件)
const express = require('express')
// 第三個區塊 自建模組

////////////////////////////////////////////////////////////////

// const server = http.createServer((req, res) => {
// 	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
// 	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
//     console.log('req url:', req.url);
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' }); //MIME type
//         return res.end('<h1>This is Login page</h1>');
//     }
// 	res.end();
// });

// const url = require('url');
// console.log(url.parse('https://www.youtube.com/watch?v=ssZTiB8yg94&t=43s'));

// server.listen(3000, () => {
// 	console.log('running server on port 3000');
// });

const app = express();

//middleware
app.get((req, res, next) => {
    console.log('hello');
    next();
});

app.get((req, res, next) => {
    console.log('world');
    next();
});

app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});