//1. OPERATORS : use this operators with variable and constants to create expressions

// with this expression we inmplement logic and algrithms

// Different Types of Operators: Arithmetic, Assignment, Comparisons, Logical, Bitwise

//1. Arithmetic Operators
let x = 12;
let y = 5;
let z = 10;

console.log(x + y); //Addition
console.log(x - y); //Subtraction
console.log(x * y); //Multiplication
console.log(x / y); //Division
console.log(x % y); //Remainder of Division

// Increment (++)
console.log("++x", ++x);
console.log("z++", z++);
console.log(z);

// Decrement (--)
console.log(--y);

// 2. ASSIGNMENT OPERATOR
let a = 10;
// a = a + 5;
a += 5; //assignment operator

b = a * 5;
b *= 5;
console.log("a", a);

//3. COMPARISON OPERATOR : Returns boolean true or false

let c = 1;
// 3.1. Relational operator
console.log(c > 0);
console.log(c >= 1);
console.log(c < 1);
console.log(c <= 1);
// 3.2 Equality operator
console.log(c === 1); //eaual //python e 2ta ==
console.log(c !== 1); //not equal

// 3.2.1 Strict Equality (same Type + same Value)
console.log(1 === 1);
console.log("1" === 1);
// 3.2.1 Loose Equality(check values)
console.log(2 == 2);
console.log("2" == 2); //converts value to type

// 4.TERNARY OR CONDITIONAL OPERATOR

// if a customer has more than 100 points than 'gold', otherwise 'silver'
let points = 110;
let customertype = points > 100 ? "gold" : "silver";
//justify on the basis of boolean,ture hole gold r false hole silver
console.log(type);

// 5. LOGICAL OPERATOR : AND(&&) OR(||) NOT(!) with Boolean
// 5.1 Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log("both ture", true && true);
console.log("one false", false && true);
console.log("both false", false && false);

const highIncome = true;
const goodCreditScore = true;
const goodLooking = false;
const elegibleForLoanAND = highIncome && goodCreditScore && goodLooking;
console.log("elegible for loan AND", elegibleForLoanAND);

// 5.2 logical OR (||)
const elegibleForLoanOR = highIncome || goodLooking || goodCreditScore;
console.log("elegible for loan OR", elegibleForLoanOR);
// 5.3 logical NOT(!)
const applicationRefused = !elegibleForLoanAND;
console.log("Refused", applicationRefused);

// 6. LOGICAL OPERATOR WITH NON BOOLEAN
// Truthy and Falsy
// Falsy (false)-- 1.undefined 2.null 3. 0 4.false 5.'' 6. NaN-Not a Number
// Truthy : anthing thats not falsy
false || true;
false || "shuvo";
false || 1;
false || 1 || 2;

const userColor = undefined; //"red"
const defaultColor = "blue";
const currentColor = userColor || defaultColor;
console.log("shirt color", currentColor);

// 7. BITWISE OPERATOR  - NO NEED
// 8. OPERATOR PRESEDENCE : parententhesis () use kore presidence dite pari
let d = 2 + 3 * 4;
console.log(d);
let e = (2 + 3) * 4;
console.log(e);

// exercise
let f = "blue";
let g = "green";

let h = f;
f = g;
g = h;
console.log(f);
console.log(g);
