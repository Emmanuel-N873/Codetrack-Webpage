//LOGICAL
// const a = true;
// const b = false;

// const resultAnd = a && b;
// const resultOr = a || b;
// console.log("Logical AND:", resultAnd); // false

// console.log("Logical OR:", resultOr); // true

// const negOR = !resultOr;
// const negAND = !resultAnd;
// console.log("Negated OR:", negOR); // false
// console.log("Negated AND:", negAND); // true

//Real Life
const total = 5000 * 2;
const ageofbuyer = 17;
//Gate
const isAdult = 21 >= ageofbuyer;
const canBuy = total && isAdult;
console.log("Can Buy:", canBuy); // false
