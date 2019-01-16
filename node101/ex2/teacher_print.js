//fs is part of Node.js
const fs = require("fs");
const fileName = process.argv[process.argv.length-1];

//Asynchronous
fs.readFile(fileName,'utf-8',(e,contents)=>{
    //By default the return value of readFile is a buffer
    //As such, you'll need to convert it in order for you to read it
    if(e){
        console.log(e);
    } else {
        console.log(contents.toString().toUpperCase());
    }
});

//Synchronous
const contents = fs.readFileSync(fileName,'utf-8');
console.log(contents);  //P.S. This actually runs before fs.readFile()