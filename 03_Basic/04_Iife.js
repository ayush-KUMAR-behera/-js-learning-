// Immediately Invoked function Expression (IIFE)


// Why we need a function that we want imidate execution
// Ans ---> We need bcz for database connection, we want when server start db configuration will be excecute,
//        to avoid global variable polluion, some time global varibale distrub function

// Named IIFE

(function greet(){
    console.log("Whish you all the best");
    
})();


// U N named IIFE
(()=>{
    console.log("MySQL Connected Successfully");
    
})();

// U N named parameter IIFE

((name)=>{
console.log(`your DB connected to: ${name}`);

})('ORACLE');