const mySymbol=Symbol("DC");
// console.log( typeof mySymbol);

const ipl={
    winner:"Rcb",
    season:19,
    capten:"Rajat",
    [mySymbol]:"Champion"
}
// console.log( typeof ipl[mySymbol]);
// console.log(typeof ipl["winner"]);

console.log(ipl.season);

ipl.season=18

console.log(ipl.season);
//  Object.freeze(ipl);
//  ipl.season=20;
//  console.log(ipl.season);
 
// console.log(Object.keys(ipl));
// console.log(ipl);
// console.log(Object.values(ipl));

const ind={
    odi:2027,
    t20:2026,
    test:2021
}
 
const rcbXind={...ipl,...ind};
// console.log(rcbXind);

const {t20}=ind;
const {t20:winner}=ind;
console.log(t20);
console.log(winner);




