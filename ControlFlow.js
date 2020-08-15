// -> CONDITIONAL STATEMENT : A. IF...ELSE B. SWITCH...CASE
//-> 1.A. If ELSE CONDITION
// if (condition) {
//   statement;
// } else if (2ndCondition) {
//   statemtnt;
// } else if (3rdCondition) {
//     statement
// } else {
//     statement
// }

// if hour is between 6am and 12pm :Good morning!
// if hour is between 12pm to 6pm : Good afternoon!
// otherwise : Good evening

const hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
// because dealing with single statement curly braces creating noice in the code
const time = 15;
if (time >= 6 && time < 12) console.log("Good morning!");
else if (time >= 12 && time < 18) console.log("Good afternoon!");
else console.log("Good evening!");
// Noice removed

// 1.B -> SWITCH AND CASE

// let variable
// switch(variable) {
//     case 'case statement' :
//         console.log('case statement')
//         break;

//     case '2nd case statement' :
//         console.log('2nd case statement')
//         break;

//     default:
//         console.log('unknown')
// }
let role = "moderator";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}
// same example with if else stament
const user = "student";
if (user === "student") console.log("Student User");
else if (user === "teacher") console.log("Teacher user");
else console.log("Unknown User");

// 2. --> LOOPS : FOR, WHILE, DO..WHILE, FOR..IN, FOR..OF
// 2. A --> FOR LOOP
// for (three Statements )
// for (initialExpression = defining a variable; condition ; incrementExpression) {
//     statment
// }
for (let i = 0; i < 5; i++) {
  console.log("hello world", i);
}
// starting from 1
for (let i = 1; i <= 5; i++) {
  console.log("hello shuvo", i);
}
// odd numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log("odd number", i);
  }
}
// for loop reverse order: decrimenting way
for (let i = 10; i >= 1; i--) {
  if (i % 2 !== 0) console.log("decrement odd number", i);
}

// 2.B --> WHILE LOOP

// let i = 0 // Variable outside the loop
// while (condition) {
//     statement;
// incrementExpression
// }

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log("while odd number", i);
  i++;
}
// 2.C-->  DO WHILE LOOP : Execute atleast once
// variable
// do {
//     statement;
//     incrementExpression
// } while (condition)
let x = 9; // i become a global variable now tai x
do {
  if (x % 2 !== 0) console.log("do while odd", x);
  x++;
} while (x <= 5);

// 2.D--> INFINITE LOOPS
// 2.E --> FOR-IN LOOP : used to interate properties of object{}
const person = {
  name: "shuvo",
  age: "27",
};

// console.log(key);
for (let key in person) console.log(key, person[key]);
// Dot notation // Bracket notation

const fruits = ["apple", "orange", "lichi"];
for (let index in fruits) console.log(index, fruits[index]);
// for-in not used in arrays

// 2.F ---> FOR-OF LOOPS: Used in arrys / ES6 Loop / iterate only items/value
const colors = ["red", "green", "black"];
for (let color of colors) console.log(color);

// 3 --> BREAK AND CONTINUE
// BREAK : Jump out of the loop /
// continue : jump to the next iteration /not recommend to use
let a = 0;
while (a <= 10) {
  if (a === 5) break;
  //   checking even with continue but getting odd
  //   if (a % 2 === 0) {
  //     a++;
  //     continue;
  //   }
  console.log(a), a++;
}
