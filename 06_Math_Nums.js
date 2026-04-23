// console.log(Math.random()); // --> 0 to 1

// console.log((Math.random()*10)+1); //6.027288000331978  --> 6 to get 1 value use Math.floor()

// console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

// console.log(Math.floor(Math.random()*(max-min+1)+min));



//OTP generation
// console.log(Math.floor((Math.random()*1000000)+1));

// Math.abs() change negative to positive

// console.log(-4);
// console.log(Math.abs(-4));

//Math.round() give rround fig 4.2-> 4 , 4.5->5 ,4.7->5

// console.log(Math.round(4.2));
// console.log(Math.round(4.4));

// console.log(Math.round(4.5));
// console.log(Math.round(4.7));

//Math.ceil ->give highest round value , 4.2->5, 4.5->5, 4.8->5

// console.log(Math.ceil(4.2)); //5
// console.log(Math.ceil(4.5)); //5
// console.log(Math.ceil(4.8)); //5

// Math.floor() give least value , 4.2-> 4, 4.5-> 4 , 4.8 -> 4
// console.log(Math.floor(4.2));  // 4
// console.log(Math.floor(4.5)); //4
// console.log(Math.floor(4.9)); //4

//pow() 
// console.log(Math.pow(2,3)); //8
// console.log(Math.pow(5,2)); //25

// Math.sqrt() 25=5 , 16=4
// console.log(Math.sqrt(144)); //12
// console.log(Math.sqrt(16)); //4

// Make a ludo dice using Math.random() 1-6
// console.log(Math.floor(Math.random()*6+1));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Number

const score=100;
// console.log(score); //100 by default js convert to Number
const anotherScore=new Number(400);
// console.log(anotherScore);  // [Number: 400] //programer tell i need number


// to Fixed
const salary=new Number(299);
// console.log(salary); // 299
// console.log(salary.toFixed(2)); // 299.00
// console.log(salary.toFixed(3)); //299.000

// to Precision
const value=23.89;
// console.log(value.toPrecision(3)); //23.9
// console.log(value.toPrecision(4)); // 23.89
// console.log(value.toPrecision(2)); // 24
// console.log(value.toPrecision(5)); // 23.890


// const hundreds=1000000;
// console.log(hundreds);
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

const mark=575;
console.log(mark.toExponential(6));






















