/**
 * Declarative Function/Named function Can be called from anywhere in the file
 * 1. Function that returns a value
 */

function addTwoNumbers(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

let myResult2 = addTwoNumbers(2, 3);

console.log(myResult2);

console.log("**************");
/**
 * 2. function that does an action
 */

function helloOne() {
  console.log("Hello One!!!");
}

helloOne();

console.log("**************");
/**
 * 3. any type of data can be provided. no validation done
 */

function multiplyByTwo(number) {
  var result = number * 2;
  return result;
}

var myResult = multiplyByTwo("four");
console.log(myResult);

let myResult3 = addTwoNumbers("2", 3);
console.log(myResult3);

let myResult4 = addTwoNumbers(3);
console.log(myResult4);

console.log(addTwoNumbers);

console.log("**************");
/**
 * Anonymous Function - used as callback function (function requires another function as arguments)
 *
 */
var helloTwo = function () {
  console.log("Hello Two!!!");
};

helloTwo();

console.log("**************");
/**
 * function with arguments (default value)
 *  */

function greeting(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}`);
}

greeting("Jay");

/**
 * function with arguments (Passing falsy/undefined value if unknown)
 *  */

function printName(firstName, middleName, lastName) {
  if (middleName) {
    console.log(`Full name is ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Full name is ${firstName} ${lastName}`);
  }
}

printName("Jay", "Steve", "Coorey");
printName("Jay", undefined, "Coorey");
printName("Jay", "", "Coorey");

/**
 * function with arguments (Passing primitives/object types as arg)
 *  */

function printFullName(person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printFullName({
  firstName: "Steve",
  lastName: "Jobs",
});

console.log("**************");

/**
 * function with arguments (Rest parameter and argument object)
 *  */

function addNumbers(number1, number2, ...number3) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
  let total = number1 + number2;
  return total;
}

addNumbers(1, 2, 3);

console.log("**************");

/**
 * returning a function
 */

function addNum(number1, number2) {
  return function () {
    return number1 + number2;
  };
}

let total = addNum(2, 2);
console.log(total());

function addNum2(number1, number2) {
  if (!number1) {
    return;
  }
  let sum = number1 + number2;
  return sum;
}

let total2 = addNum2(2, 2);
console.log(total2);
let total3 = addNum2(undefined, 2);
console.log(total3);

console.log("**************");

/**
 * self invoking function
 */

(function addNum3(number1, number2) {
  console.log("executing addNum3");
  let sum = number1 + number2;
  return sum;
})(3, 3);

console.log("**************");
/**
 *
 * ES6 function or Arrow Function
 */

let sum4 = (number1, number2) => {
  let sum = number1 + number2;
  console.log(sum);
};

sum4(4, 4);
/**
 * No params
 */

var helloThree = () => console.log("Hello Three!!!");

helloThree();

//single params

let greet = (name) => console.log(`Hello ${name}`);
greet("Rob");

//import functions from seperate file
import { printAge } from "../helpers/printHelper.js";

printAge(5);

//import everything

import * as helper from "../helpers/printHelper.js";
helper.printAge(6);
