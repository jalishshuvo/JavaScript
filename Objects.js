// 1.OBJECTS : a.collection of key, value pairs
//  b. putting related variable inside of a Object
//  c. {} -> object literal syntex
//  d. key is also called properties
const circle = {
  radius: 1, //value can be number,string, anything
  location: {
    x: 1,
    y: 2,
  }, // another object

  isVisible: true, //boolean
  draw: function () {
    console.log("draw");
  }, // function
};

circle.draw();
// e. purpose of object is to group related variables
// f. related function should be define inside of that object

//  --> OBJECT ORIENTED PROGRAMMING(OOP) :
// Objects talk to each other to perform some functionality
// METHOD :in OOP if a function is inside of a object

// 2. FACTORY FUNCTION
// Like factory prouce product this function produce OBJECTS
//
function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("drawing");
    },

    // draw: function () {
    //   console.log("draw");
    // },
  };
}

const circle1 = createCircle(2);
console.log(circle1);
console.log(createCircle(10));

// 3 --> CONSTRUCTOR FUNCTION
// Another pattern of creating objects
// Camel Notation : oneTwoThree (factory f)
// Pascal Notation: OneTwoThree (constructor f)
// this keyword is used instead of return

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
const x = {};
// new operator : with this NEW keyword //done 3 things
//  a. creates new JS object like const x = {empty object}
//  b. set this keyword to point this new empty object
//  c. finally this new operator return this new objct from function

// 4. DYNAMIC NATURE OF OBJECT
// Dynamicly we can add properties or method to a Object
const school = {
  student: "rahim",
};
// school = {}
school.name = "rumc"; //adding properties
school.draw = function () {}; //adding method

delete school.student; //deleting a property
delete school.draw; //deleting a method

console.log(school);

// 5. --> CONSTRUCTOR PROPERTT
// Every object in JS has a property CONSTRUCTOR
// CONSTRUCTOR : refers to the function to create the object
const another = new Circle(1);

// 6 --> FUNCTION ARE OBJECT
// in JS function are object

// 7. --> VALUE TYPE(PREMITIVE) & REFERENCE TYPE
// PREMITIVE are copied by their value
let z = 10;
let y = z;
z = 30;

// OBJECT are copied by their reference
let c = { value: 10 };
let d = c;
c.value = 20;

// another example
// prmitive
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log("number is copied by their value", number);

// object
let obj = { vaule: 10 };
function increase(obj) {
  obj.vaule++;
}
increase(obj);
console.log("object is copied by their reference", obj);

// 8. --> ENUMERATING/COUNTING PROPERTIES OF AN OBJECT
const color = {
  name: "red",
  method() {
    console.log("method");
  },
};
// for in loop to interate an object
for (let key in color) console.log(key, color[key]);
// for of loop to inerate an array but useing Objet.key()
for (let key of Object.keys(color)) console.log(key);

// Object.entires() Method to make Array from Object
for (let entry of Object.entries(color)) console.log(entry);

//  in operator to check a key exist in Object
if ("name" in color) console.log("yes");

// 9 --> CLONING AN OBJECT : 3 Ways
const fruits = {
  name: "apple",
  price() {
    console.log("price method");
  },
};

// Clonig with SPREAD OPERATOR //easiest
const anotherFruit = { ...fruits };
console.log(anotherFruit);

// 10. --> GARBAGE COLLECTION : AUTOMATICALLY

// 11. --> MATH METHOD :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// clg Math.random, Math.max, Math.min etc

// 12 --> STRING OBJECT Method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// A. String primitive
const message = "I love JavaScript";

//  B. String Object
const strobject = new String("hi");
// try these in console
message.toUpperCase();
message.replace();
message.indexOf();
message[0];
message.trim();
message.split();

// Escape Notations : look in morzilla

// 14. --> TEMPLATE LITERAL : `` backtic

const templatLiteral = `
Template literal helps us to
format our code as 
we want  `;

// we can dynamically add expressin with it

name = "shuvo";
language = "JS";
const tLiteral = `
hi ${name} ${2 + 2}

why you are learnign ${language} ?

regard
${name}
`;
// 14. DATE OBJECT : Search for JavaScript date Mozzila
