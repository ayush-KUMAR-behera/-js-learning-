// let score="33abc";
// let score=false;
// console.log(typeof score);
// let convertInNumber=Number(score);
// console.log(convertInNumber);
// console.log(typeof convertInNumber);

let score=null;
let convertToBoolean=Boolean(score);
// console.log(convertToBoolean);

//  INTERNAL TYPE CONVERSION  -------------------------------------
    
    // console.log(true); //true
    // console.log(+true); //--1

    // console.log(1+"1"); //11
    // console.log("1"+2); // 12

    // console.log(+"1"+1); // 2
    // console.log(1+ +"5"); // 6

    console.log(1+1+"2"); // 22
    console.log("1"+1+2); //112
    console.log(+"1"+1+2); //4

    console.log(typeof +"1"+1-2);
    console.log(typeof (+"1"+1+2));