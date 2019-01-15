const http = require('http');
const fs = require('fs');

const server = http.createServer((rq,rs)=>{
    //rs.end(`<h1>IT'S ALIVE!!!</h1>`);
    if(rq.url === '/'){
        //console.log("SOMEONE REQUESTED A PAGE!!!",rq.url)
        rs.writeHead(200,{'content-type':'text/html'});
        const homePage = fs.readFileSync('app/index.html');
        rs.end(homePage);
    } else if(rq.url === '/main.js'){
        rs.writeHead(200,{'content-type':'text/javascript'});
        const scriptFile = fs.readFileSync('app/main.js');
        rs.end(scriptFile);
    } else if(rq.url === '/main.css'){
        rs.writeHead(200,{'content-type':'text/css'});
        const styleFile = fs.readFileSync('app/main.css');
        rs.end(styleFile);
    } else {
        rs.writeHead(404,{'content-type':'text/html'});
        rs.end("BARK BARK!!!");
    }
});

server.listen(3030);