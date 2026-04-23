let myarr=[0,1,2,3,4,5];
// console.log(myarr);
// console.log(myarr[4]);

myarr.push(6); // push element in the last of array
// console.log(myarr);
myarr.pop();
// console.log(myarr); //pop remove last of array

myarr.unshift(0);// unshift add element in first
// console.log(myarr);

myarr.shift(); //shift remove first element of arr
// console.log(myarr);

// console.log(myarr.includes(18)); //false return boolean
// console.log(myarr.indexOf(4));// 4 return index of the element
// console.log(myarr.indexOf(45));// if element not present then return -1

const newArr=myarr.join(); // it converts arr to string
// console.log(typeof myarr);
// console.log(myarr);

// console.log(typeof newArr);
// console.log(newArr);

// slice vs Splice

// console.log("1st ",myarr);
// console.log(myarr.slice(1,3)); // [1,2] // return 0,2 not include last element and NO change in original Array
// console.log("2nd ",myarr);

// console.log(myarr.splice(1,3)); //[1,2,3] // it include last element and remove form these i original array

// console.log("3rd ",myarr);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const rcb=["virat","salt","dev","bhuvi","hazel"];
const csk=["dhoni","raina","sanju","rutu"];
// rcb.push(csk);
// console.log(rcb);

const ipl=rcb.concat(csk); // concat rtn new arr
// console.log(ipl);

//Spread Operator
const newTeam=[...rcb,...csk];
// console.log(newTeam);

const mulArr=[1,2,3,['a','b','c'],4,5,6,['x','y','z']];
// console.log(mulArr);
// console.log(mulArr.flat(1));


console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));




