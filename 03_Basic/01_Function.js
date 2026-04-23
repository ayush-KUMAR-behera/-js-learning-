function greet(){
    console.log("Good AfterNoon Have a nice day");
}

// greet();
greet //--> function refference
// greet(); //execution

//       ---------> P a r a m e t e r
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
// addTwoNumber(10,5);
// addTwoNumber("10",5);//Argument

function mulTwoNumber(num1,num2){
    console.log("Before Return Statement");
    let result=num1*num2;
    return result;
    console.log("After return Statement");
    
}
// After return statement no line execute
// let store=mulTwoNumber(5,5);
// con
// sole.log(store);

function loginUserMessage(username="Jhon"){     // Set Default value
    return `${username}, Just logged in`
}

// console.log(loginUserMessage()); // Jhon
// console.log(loginUserMessage("Ayush")); //Ayush

//  R E S T OPERATOR
function calCulateCartPrice1(num1){
    return num1;
}
// console.log(calCulateCartPrice1(100,200));

function calCulateCartPrice2(...num1){
    return num1;
}
// console.log(calCulateCartPrice2(100,200,300,400));
function calCulateCartPrice3(num1,num2,...num3){
    return num3;
}
// console.log(calCulateCartPrice3(100,200,300,400));

// Handel Object 
const myObj={
    userName:"Ayush",
    price:999
}

function handelObject(anyObj){
    return `username: ${anyObj.userName} and Price: ${anyObj.price}`
}

// console.log(handelObject(myObj));

// H a n d el Array in Function
function giveSecondElement(anyArr){
    return anyArr[1];
}

let arr=["DSA","JS","SPRINGBOOT","APPLITUDE"]
console.log(giveSecondElement(arr));

