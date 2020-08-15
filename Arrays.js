// INTRODUCTION
// Adding new elements
// finding elements
// Removing elements
// Spliting arrays
// Combining arrays

// 2. ADDING NEW ELEMENTS
const numbers = [3, 4];
//End
numbers.push(5, 6);
// Beginning
numbers.unshift(1, 2);
// Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

// 3. FINDING ELEMENTS IN AN ARRAY
// finding premitives or value types
const array = [1, 2, 3, 4, 1];
console.log(array.indexOf("a"));
console.log(array.lastIndexOf(1));
console.log(array.includes(4));

// finding Object type : is differet from premitives
const courses = [
  { id: 1, name: "Management" },
  { id: 1, name: "Accounting" },
];

// console.log(courses.includes({ id: 1, name: "Management" }));
const account = courses.find(function (subject) {
  return subject.name === "Accounting";
});

console.log(account);

// Arrow function - ES6
const management = courses.find((course) => course.name === "Management");
console.log(management);

// 6. REMOVING AN ELEMENT FROM AN ARRAY
const num = [1, 2, 3, 4];
// End
// num.pop();

// Beginning
// num.shift();

// Middle
num.splice(2, 2);
console.log(num);

// 7. EMPTYING AN ARRAY

let digit = [1, 2, 2, 4];
let another = digit;
// solution 1
// digit = [];

// solution 2
// digit.length = 0;

// solution 3
digit.splice(0, digit.length);
console.log(digit);
console.log(another);

// 8. COMBINING AND SLICING AN ARRAY
// combining
const array1 = [1, 2, 3];
const array2 = [4, 5, 1];

const combine = array1.concat(array2);
console.log(combine);

// slicing
const slice = combine.slice(2);
console.log(slice);

// 9. THE SPREAD OPERATOR -- ES6 -combining arrays

const num3 = [1, 2, 3];
const num4 = [4, 5, 6];

//only combining
const combine1 = [...num3, ...num4];
console.log(combine1);

// combining and adding
const combine2 = [...num3, "a", ...num4, "b"];
console.log(combine2);

const copy = [...combine2];
console.log(copy);

// 10. ITERATING AN ARRAY

num5 = [1, "a", 3, 4];

// for of loop
for (let number in num5) console.log("for in", number); //returns index
for (let number of num5) console.log("for of", number); //returns value

// forEach Method :
// function
num5.forEach(function (number) {
  console.log(number);
});
// arrow function
num5.forEach((number) => console.log("forEach", number));

// showing the index
num5.forEach((index, number) => console.log(number, index));

// 11. JOINING ARRAYS

// join method
const num6 = [1, 2, 3];
const joined = num6.join(","); //returns string
console.log(joined);

// split method
const message = "This is my first message";
const split = message.split(" ");
console.log(split);

const joinAgain = split.join("-");
console.log(joinAgain);

// 12. SORTING ARRAYS
// sort method
const num7 = [2, "b", "a", 3];
num7.sort();
console.log(num7);

// reverse method
num7.reverse();
console.log(num7);

// in terms of Objcet
const languages = [
  { id: 1, name: "Python" },
  { id: 2, name: "javaScript" },
];

languages.sort(function (a, b) {
  // a <b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(languages);

// 13 . TESTING ELEMENTS OF AN ARRAY

const num8 = [1, -2, 2, 3];

// every() -- every item
const allPositive = num8.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

// some() -- atleast 1 item
const atleastOnePositive = num8.some(function (value) {
  return value >= 0;
});
console.log(atleastOnePositive);

// 14. FILTERING AN ARRAY

const num9 = [1, -2, 2, 3];

// const filterdPositive = num9.filter(function (value) {
//   return value >= 0;
// });
// arrow function
const filterdPositive = num9.filter((value) => value >= 0);

console.log(filterdPositive);

// 15. MAPPING AN ARRAY *****
// map each elements of an arry to something else

// Maping number to string
const num10 = [1, -2, 2, 3];

const filtered = num10.filter((n) => n >= 0);

const items = filtered.map((v) => "<li>" + v + "</li>");

const html = "<ul>" + items.join("") + "</ul>"; //join method convet it to string

console.log(items);
console.log(html);

// Maping number to object

const num11 = [1, -2, 2, 3];

const filtered2 = num11.filter((n) => n >= 0);

// const items1 = filtered2.map((n) => {
//   return { value: n };
// });

// by defauley in arrow function {} represents code block to solve this ({})
const items1 = filtered2.map((n) => ({
  value: n,
}));

console.log(items1);

// CHAINING

const num12 = [1, -2, 2, 3];

const chaining = num11
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log("chaining", chaining);

// 16. REDUCING AN ARRAY
const shoppingCart = [10, 20, 30, 40];

// regular for of loop
// let sum = 0;
// for (let item of shoppingCart) sum += item;
// console.log(sum);

// Reduce method

// a = 0, c = 10 => a =10
// a = 10, c = 20 => a = 30

const sum1 = shoppingCart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum1);

// making the code shorter

const sum2 = shoppingCart.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum2);
