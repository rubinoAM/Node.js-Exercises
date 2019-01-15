const fs = require('fs');
const fileOne = process.argv[process.argv.length-3];
const fileTwo = process.argv[process.argv.length-2];
const fileThree = process.argv[process.argv.length-1];
let fOneContents, fTwoContents, fOneConArray, fTwoConArray;
let mainArray = [];

fs.readFile(fileOne,'utf8', function(err,contents){
    if(err){
        console.log(err);
    }
    fOneContents = contents;
    fOneConArray = fOneContents.split('\n');
    //console.log(Array.isArray(fOneConArray));
    fOneConArray.forEach((line)=>{
        mainArray.push(line);
    });
    //console.log(mainArray);
    fs.readFile(fileTwo,'utf8',function(err,contents){
        if(err){
            console.log(err);
        }
        fTwoContents = contents;
        fTwoConArray = fTwoContents.split('\n');
        //console.log(Array.isArray(fTwoConArray));
        let i = 0;
        fTwoConArray.forEach((line)=>{
            i++;
            if(i==1){
                mainArray.splice(i,0,line);}
            else if(i==2){
                mainArray.splice(i+1,0,line);
            }
            else if(i==3){
                mainArray.splice(i+2,0,line);
            }
        });
        fs.writeFile(fileThree, mainArray, function(err,contents){
            if(err){
                console.log(err);
            }
        })        
    });    
});