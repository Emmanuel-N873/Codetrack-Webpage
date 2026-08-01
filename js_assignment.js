//Question 1//
const FullName = "Emmanuel Nwauzobilom";
let age = 31;
const isEnrolled = true;
console.log("1a", FullName);
console.log("1b", age);
console.log("1c", isEnrolled);

// This gives the data and status of the user.

//Question 2//
let walletBalance = 5000;
console.log("2a", walletBalance);
walletBalance = 7500;
console.log("2b", walletBalance);
// This shows the initial and updated balance of the wallet.

//Question 3//
const ItemInCart = 5;
const ItemPrice = 2.50;
console.log("3a", ItemInCart);
console.log("3b", ItemPrice);
// This shows the total number of items in the cart as 5 and the price per item as 2.50.

//Question 4//
const price = 2500;
const quantity = 4;
const totalCost = price * quantity;
console.log("4", totalCost);
// This shows the total cost of the items.

//Question 5//
const a = 17;
const b = 5;

const sum = a + b;
console.log("5a", sum);
// This shows the sum of a and b.
const substract = a - b;
console.log("5b", substract);
// This shows the difference between a and b.
const multiply = a * b;
console.log("5c", multiply);
// This shows the product of a and b.
const divide = a / b;
console.log("5d", divide);
// This shows the quotient of a and b.
const modulus = a % b;
console.log("5e", modulus);
// This shows the remainder of a divided by b.
const exponent = a ** b;
console.log("5f", exponent);
// This shows the result of a raised to the power of b.

// This shows the result of various arithmetic operations between a and b.//

//Question 6//
const SellingPrice = 12000;
const DeliveryCost = 2000;
const QuantitySold = 3;
const Income = (SellingPrice * QuantitySold) + DeliveryCost;
console.log("6", Income);
// This shows the total income from selling 3 items at a selling price of 12000 and a delivery cost of 2000 each.//

//Question 7//
const StudentScore = 68;
const PassMark = 50;
const greater = StudentScore > PassMark;
console.log("7a", greater);
console.log("7b", StudentScore >= 70);
// This shows whether the student score is greater than the pass mark and whether it is greater than or equal to 70.

//Question 8//
const priceA = 8000;
const priceB = 12000;

const lessthan = priceA < priceB;
const greaterthan = priceA > priceB;
const lessthanorequal = priceA <= priceB;
const greaterthanorequal = priceA >= priceB;

console.log("8a", lessthan);
console.log("8b", greaterthan);
console.log("8c", lessthanorequal);
console.log("8d", greaterthanorequal);
//This shows vaious comparisons between piceA and priceB

//Question 9
const num = 7;
const str = "7";
const loose = num == str;
const strict = num === str;
console.log("9a", loose)
console.log("9b", strict)
// The loose equality shows a comparism between the two values for equality of the numbers, 
// While strict equality compares both the value and the data type without changing them.

//Question 10
console.log("10a",num != str) //negloose
console.log("10b",num !== str) //negstrict
//The negloose shows that false comfirming that  both are not different
//The negstrict shows true confirming that both values are actually different

//Question 11
const IsRaining = true;
const IsWeekend = false;
console.log("11a",!IsRaining)
console.log("11b",!IsWeekend)
//Bringing in a negation equation tends to falseify and already established equation that is void of ambiguity, hence the result shows the opposit of the stated equation. IsRaining is said to be equal to true(established), introducing the !(neg) tends to dispute that. So it returns as false(which is the opposit of the fact). Same goes for IsWeekend.

//Question 12
const correctPin = 1234;
const enteredPin = "1234";
const correct = correctPin === enteredPin;
console.log("12", correct)
//The strict equality compares the 2 variables: (correctPin & enteredPin) and noted it as false as both values are not all the same.