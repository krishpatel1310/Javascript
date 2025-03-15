// # Primitive - 7 types : String, Boolean, Number, null, Undefined, Symbols, BigInt

// --> This Primitive types are always call by value means whenver you copy them from one place to another, the original data is not given to you as a reference in the memory. They are copied and and given to you seperately.  whatever chnaegs you make to them, they are changed in the copy.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// const bigNumber = 684346413543132112n;

// # Non-Primitive(Referencetype) - Arrays, Objects, Functions

// --> Basically all these values are those whose reference are directly allocate to you in the memory.

const superstars = ["Roman Reigns", "CM Punk", "Cody Rhodes"];
let myObj = {
  name: "Krish",
  age: 22,
};

// the const superstars type is object but it is known as object function.

const myFunction = function () {
  console.log("Hello World!");
};

console.log(typeof myObj);
