// Single ton
// Object.create

// litteral
// const myObj={};

const mySym=Symbol("Key1");

const user1={
    name:"Ayush",
    "pos":"java Dev",
    age:21,
    skills:["java","python","go"],
    email:"ayush@gooogle.com",

    // mySym treted as String
    // mySym:"myKey1"

    // mySym treted as Symbol
    [mySym]:"myKey1"
}

// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1["age"]);
// console.log(user1["pos"]);

// console.log(typeof user1.mySym);


// user1.email="ayush@deloitee.com";
// Object.freeze(user1); // Lock the object -> mean can't be change
// user1.email="ayush@Salseforce.com";
// console.log(user1);


user1.greeting=function(){
    console.log("Hello good After noon");
    
}

user1.greeting2=function(){
    console.log(`Good AfterNoon:${this.name}`);
    
}

// console.log(user1.greeting());
// console.log(user1.greeting2());

// How to access Object                    How To Declare Symbol in Object
/*                                          [mySymbol]:"myKey1",            
    obj.name
    obj["name"]
    obj[symbol]
 */

// *************************************************************
// Sigleton -> Object creation with Constructor
const trindrUser=new Object();
trindrUser.name="Ayush";
trindrUser.age=22;
// console.log(trindrUser);
const  bgmiUser={
    userName:"hydra_18",
    rank:{
        seson26:{
            tier:"ace"
        }
    }
}

// console.log(bgmiUser);
// console.log(bgmiUser.rank);
// console.log(bgmiUser.rank.seson26.tier);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

//Use Speard Operator
const obj4={...obj1,...obj2};
// console.log(obj4);


const dbObj=[
    {
        id:1,
        name:"ayush"
    },
    {
        id:2,
        name:"rasmita"
    },
    {
        id:3,
        name:"akash"
    }
]
// console.log(dbObj);
// console.log(dbObj[0].id);
// console.log(Object.keys(dbObj));
// console.log(Object.values(dbObj));

const obj={
    name:"Ayush",
    age:22,
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

//------------------------------------------------------------------------------------------ /
//                      OBJECT DESTRUCTURING

const course={
    courseName:"Reactjs",
    courseTranier:"Hitesh",
    coursePrice:"2000"
}
// console.log(course.courseName);
// console.log(course["courseTranier"]);

const{courseTranier}=course;
const{courseTranier:Tranier}=course;
console.log(courseTranier);
console.log(Tranier);












