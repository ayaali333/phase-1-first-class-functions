function receivesAFunction(callback){
    callback();

}

function returnsANamedFunction(){
    return function named (){
             console.log("Aya Ali")
    }
}
function returnsAnAnonymousFunction(){
    return   () => console.log("Ayo");
    
}

