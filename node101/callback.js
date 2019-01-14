//A callback is a function for some other function to run
/*In JavaScript, functions are first-class objects
    That means you can almost do anything with a function that you could with any object*/

function x(){}
console.log(typeof(x));

const myFunc = function(n){
    console.log(n)
}

function otherFunc(callback){
    callback(5);
}

otherFunc(myFunc);

//SOMEWHERE IN JQUERY'S CODE
window.$ = {};
$.getJSON = function(url, callback){
    //jQuery grabs data from url and calls it myData
    callback(myData);
}