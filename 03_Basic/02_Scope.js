var a=10;
let b=20;
const c=30;


if(true){
    
    var a=100;
    let b=200;
    const c=300;
    // console.log("Inner var"+a);
    // console.log("Inner let"+b);
    // console.log("inner const:"+c);
    
}

    // console.log("Outer var"+a);
    // console.log("Outer let"+b);
    // console.log("Outer const:"+c);

    
// Nested Scope
function One(){
        let userName="Ayush";
    function Two(){
        console.log("Username: "+userName);
        let website="Youtube.com";
    }
    // console.log(website); // website declare in  function Two()
    Two();
}

// One();

if(true){
    const userName="Ayush";
    if(userName==="Ayush"){
        const website="IPL";
        // console.log(userName+" "+website);
    }
    // console.log(website);
    
}

// console.log(userName);


// Its depend how we declare function

console.log(addOne(5));

function addOne(num){
    return num+1;
}

// addOne(5);  // Here no problem


// addTwo(10); // Problem say no initialization
const addTwo=function (num){
    return  num+2;
}

// addTwo(12); //  Here no problem