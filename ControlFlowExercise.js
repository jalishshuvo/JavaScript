// write a function that takes two numbers and return maximum of two

let number = max(10, 20);
console.log(number);

function max(a, b) {
  //   if (a > b) return a;
  //   else return b;
  //   conditional operaton : (condintion) ? true : false
  return a > b ? a : b;
}

// function for landscape and portrait

console.log(isLandcape(800, 1200));
// function isLandcape(width, height) {
//   return width > height ? "lanscape" : "portrait";
// }
function isLandcape(width, height) {
  return width > height;
}

// FIZBUZZ
//  Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a Number'

const output = fizzBuzz(15);
console.log("FizzBuzz", output);

// My solution
// function fizzBuzz(input) {
//   if (input % 3 === 0 && input % 5 === 0) {
//     return "FizzBuzz";
//   } else if (input % 3 === 0) {
//     return "Fizz";
//   } else if (input % 5 === 0) {
//     return "Buzz";
//   } else if (input % 3 !== 0 || input % 5 !== 0) {
//     return input;
//   } else {
//     return "Not a Number";
//   }
// }

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else return input;
}

// DRIVING DEMERIT POINTS
// Speed Limit = 70 => ok
// 5 -> 1 points
// Math.floor()
// 12 points => suspended

checkSpeed(79);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) console.log("ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("lisence suspended");
    else console.log("points", points);
  }
}
//  2nd method: removing the indentetion

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed < speedLimit + kmPerPoint) {
//     console.log("ok");
//     return;
//   }

//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("lisence suspended");
//   else console.log("Indentation points", points);
// }

// EVEN AND ODD NUMBERS:
// Litmit of number
// index => odd
// index => even

showNumber(10);
// 1ST Method :
// function showNumber(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "even");
//     else console.log(i, "odd");
//   }
// }

// 2nd method : using Ternery
function showNumber(limit) {
  for (i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// COUNT TRUTHY:
const array = [0, null, undefined, "", NaN, 4, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// SHOWING STRING PROPERTIES OF OBJECT
const movie = {
  title: "Mission impossible",
  rating: 9,
  yearReleased: 1999,
  actor: "Tom cruise",
};

stringProperties(movie);

function stringProperties(obj) {
  for (let key in obj) //console.log(key, obj[key]);
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

// SUM OF MULTIPLE 3 AND 5 AND UPTO LIMIT(10)WE GIVE :not working
// multiple of 3 upto 10 => 3, 6, 9
// multiple of 5 upto 10 => 5, 10

console.log("sum", sum(10));
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++);
  if (i % 10 === 0 || i % 5 === 0);
  sum += i;

  return sum;
}

// CALCULATING GRADE
// 1 - 59 : F
// 60 - 69 : D
// 70 - 79 : C
// 80 -89 : B
// 90 -100 : A

const marks = [80, 300, 50];
console.log("Final", calculatingGrade(marks));

function calculatingGrade(marks) {
  // let sum = 0;
  // for (let mark of marks) sum += mark;
  // // console.log(sum);
  // let average = sum / marks.length;
  // // console.log(average);
  const average = calAverage(marks);

  if (average < 60) return "F";
  else if (average < 70) return "D";
  else if (average < 80) return "C";
  else if (average < 90) return "B";
  else if (average < 100) return "A";
  else return "Error";
}

function calAverage(array) {
  sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

// SHOWING STARS IN ROWS
showStar(10);
function showStar(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 1; i <= row; i++) pattern += "*";
    console.log(pattern);
  }
}
