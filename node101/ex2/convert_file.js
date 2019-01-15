const fs = require('fs');
let fName = process.argv[process.argv.length-2];
let outFile = process.argv[process.argv.length-1];

fs.readFile(fName,'utf8', function(err,contents){
    if(err){
        console.log(err);
    }
    output = contents;
    output.toUpperCase();

    fs.writeFile(outFile, output, function(err,contents){
        if(err){
            console.log(err);
        }
    })
});