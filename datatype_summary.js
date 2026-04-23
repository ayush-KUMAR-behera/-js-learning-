// DATA TYPE
// 2 TYPE = 1-PRIMITIVE (PD) 2- NONPRIMITIVE (NPD)

//PD -> 7- STRING,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BIG INT

let username="ayush";
let accId=122384;
let isActive=true;
let temp=null;
let email;
let id=Symbol('123');
let anotherId=Symbol('123');

// console.log(id===anotherId);//false

let bigNumber=62867247247647n;
/*
    type of null== Object
    type of symbol=symbol
    symbol is used for unique porpose
 */

// console.log(typeof username);
// console.log(typeof accId);
// console.log(typeof isActive);
// console.log(typeof temp);
// console.log(typeof email);
// console.log(typeof id);
// console.log(typeof bigNumber);


// NPD - Array, Object,Function

let dev=["java","mern","python","rails"];
// console.log(dev[0]);

let myObj={
    user:"Ayush",
    age:22,
    skills:["java","webdev","database","git","dsa"],
    addres:{
        present:"bbsr",
        pin:751010,
    }
}

// console.log(myObj.user);
// console.log(myObj.skills[1]);
// console.log(myObj.addres.present);


let sayHello=function(){
    console.log("Say hello to satguru mataji...");
}
sayHello();

// console.log(typeof dev); // type of Array =Object
// console.log(typeof myObj);// type of Object=Object
// console.log(typeof sayHello);// type of function --> Object Function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory  2 type 1-Stack 2-Heap
// --Primitive in stack  ,   --- Non -Primitive in Heap

let myName="kanha";
let nickName=myName;
nickName="Lintu";

console.log(myName);
console.log(nickName);

let obj1={
    email:"user1@gmail.com",
    pwd:112233
};
let obj2=obj1;
obj2.email="user2gmail.com";
console.log(obj1.email);
console.log(obj2.email);





