const fs = require('fs');
let fName = process.argv[process.argv.length-1];

fs.readFile(fName,'utf8', function(err,contents){
    if(err){
        console.log(`ENOENT: no such file or directory, open '${fName}'`)
    }
    else{
        let content = contents;
        console.log(content.toUpperCase());
    }
});