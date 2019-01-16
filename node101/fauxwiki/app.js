const http = require('http');
const fs = require('fs');

const server = http.createServer((rq,rs)=>{
    if(rq.url === '/'){
        rs.writeHead(200,{'content-type':'text/html'});
        const homePage = fs.readFileSync('./index.html');
        rs.end(homePage);
    } else if(rq.url === '/main.css'){
        rs.writeHead(200,{'content-type':'text/css'});
        const styleFile = fs.readFileSync('./main.css');
        rs.end(styleFile);
    } else {
        rs.writeHead(404,{'content-type':'text/html'});
        const errorPage = fs.readFileSync('./404.html');
        rs.end(errorPage);
    }
});

server.listen(3000);