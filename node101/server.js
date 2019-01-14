//We don't need "npm install http" because http is already native.
const http = require('http');
//console.log(http.STATUS_CODES['418']);

/*createServer takes 1 argument:
    A function to run when someone makes an HTTP connection to this program*/

const server = http.createServer((req,res)=>{
    console.log("Yadadamean?")
    res.end('<h1>HELLO, MY BABY!<br/>HELLO, MY HONEY!<br/>HELLO, MY RAGTIME GIRL!</h1><br/><img src="https://i.kym-cdn.com/photos/images/original/001/085/834/13a"/>');
});
server.listen(3000);