"use strict" // treat all js code as newer version

// alert("My name is Ayush"); // We are using node.js not browser

console.log(3+ 
    3) //       CODE Readability should be HIGH
console.log("Ayush");   

// FOR DOCUMENTION go through MDN 

// DATA TYPE
let username="Virat";
let age=36;
let isLoggin=true;
let state;//undefined
let isPresent=null

//number -> 2 power 53
//bigInt
//string -> " "
//boolean -> true/false
//null ->standalone value
//undefined 
//symbol

// type of
console.log(typeof "Ayush");//String
let status;
console.log(typeof status);//undefined

console.log(typeof null);//object bcz so null don't have type, in js object is parent 
console.log(typeof 123n);

let isActive=true;
console.log(typeof isActive);
// type of type of ? any thing is String
console.log(typeof typeof isActive);