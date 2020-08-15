//-->1 variable : reassiging variable use let

let name = "shuvo";
console.log(name);

let firstName = "jalish";
let lastName = "shuvo";
console.log(firstName);

//-->2 constant: sed only once

// const sallary = 40000;
sallary = 42000;
console.log(sallary);

//3--> Primitive Types or Value type: String, Number , Boolean, Undifined, Null

let nam = "shuvo"; //string literal
let age = 27; //number literal
let isApproved = true; //Boolean
let fName; //undefined
let middleName = null;

//4 -->Dynamic Typing vs Static Typing : it can be changed later
// typeof operator helps us to chek data type

// 5. ---> Reference Types : Object, Array, Function

// 5.1 object : multiple variable
//             like dictionary in python
let person = {
  name: "shuvo",
  age: 30,
};
// Dot Notation : to access the object and change it property
person.name = "jalish";
console.log(person);
console.log(person.name);

// Bracket Notation
person["name"] = "sultana";
console.log(person.name);

// 5.2. Array -- list in python -- Array is also an object

let basket = ["mango", "orange", "jackfruit"];
// basket[3] = "lichi";
console.log(basket);
console.log(basket[0]); //accessing an array
console.log(basket.length);

// 5.3 ---> Function
//without parameter
function greet() {
  console.log("hellow world");
}
greet();

// single parameter
function meet(name) {
  console.log("Meet " + name);
}
meet("shuvo");
// multiple parameter-- performing a task
function love(boy, girl) {
  console.log(boy + " loves " + girl);
}
love("kazi", "orkis");
love("sonny");

// 6. Types of function : performing a task || calculating a value
function square(number) {
  return number * number;
}

let multipleNumber = square(100);
console.log(multipleNumber); //single function
console.log(square(20)); // 2 ta function : square ekta and log ekta
