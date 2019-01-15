//Exercise 1 + 2
const x = 3;
const y = 5;

function squareIt(callback){
    console.log(callback(x,y)**2);
}

function multiplyEm(a,b){
    return a*b;
}

squareIt(multiplyEm);

/*Ian's Version

const x = 3;
const y = 5;

function squareIt(number, callback){
  let square = number ** 2;
  return callback(square)
}

function triple(something){
  return something * 3;
}

function multiplyEm(a,b){
   return a*b;
}

let num = multiplyEm(3, 5);
let result = squareIt(num, triple);
console.log(result); */

//Exercise 3
function marlonBrando(n){
    if(typeof(n) == 'object'){
        return n.keys();
    } else if(typeof(n) == 'function'){
        n();
    } else if(Array.isArray(n)){
        return n[0];
    } else{
        return n;
    }
}

marlonBrando(squareIt(multiplyEm));

function findElement(param1,param2){
    if(Array.isArray(param1) && typeof(param2) == "function"){
        for(let i=0; i<param1.length;i++){
            if(param2(param1[i]) == true){
                return param1[i];
            }
        }
    } else{
        return false;
    }
}

console.log(findElement([3,6,7,11,12],function(num){return num % 2 === 0}))