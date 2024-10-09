function funcA(){
    console.log("funcA");
}


let varA = funcA;

varA();

let varB = function(){
    console.log("funcB");
}

varB();
