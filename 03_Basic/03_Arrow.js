const user={
    userName:"Ayush",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.userName}, Welcome to this website`);
        console.log(this);
    }
}

// user.WelcomeMessage();
user.userName="Lucy";
// user.WelcomeMessage();

// console.log(this);  // in node->{}  in browser--> window{}

function drink(){
    let username="Ayush";
    console.log(this.userName); // undfined bcz this not work in function
    // console.log(this);  // --> in normal function this provide lots of thing 
}

// drink();

const hello=()=>{
    let username="Ayush";
    // console.log(this.userName); // undefined
    // console.log(this);  // in arrow function this provide {} 
    
}

// hello();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(15,3));


// I M P L I C I T  return
// const addTwo=(num1,num2)=>num1+num2;
const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(12,6));


// T R I C K
// if arrow function wrap in {} , then we use return statement
// if arrow function wrap in (), then we not use return statement

// const add=(num1,num2)=>{userName:"Ayush"}  // return undfined
const add=(num1,num2)=>({userName:"Ayush"})   // return object{} bcz we wrap () 
console.log(add(3,4));
