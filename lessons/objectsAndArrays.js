//Objects and Arrays

/**
 * Object Creation
 * 1. Using Object literals/initializer
 * 2. Using constructor function
 * 3. Object Create method
 *  From ESS objects can be created using classes
 */

// Using object literals
console.log("Object Creation using object literals");
var customer = {
  firstName: "John",
  lastName: "Smith",
  cars: ["Volvo", "Toyota", "Tesla"],
};
console.log(customer);
console.log(customer.firstName);
console.log(customer["lastName"]);

customer.firstName = "Mike";
customer["lastName"] = "Jordan";
console.log(`${customer.firstName} ${customer.lastName}`);

// constructor function
console.log("Object Creation using constructor function");

function Person(name, age, isMarried) {
  this.name = name;
  this.age = age;
  this.isMarried = isMarried;
  return `${this.name} is ${this.age} years old and Married: ${this.isMarried}`;
}

let obj = new Person("Bob", 34, true);

console.log(obj);
console.log(obj.name);
console.log(typeof obj);

//Object create method

console.log("Object Creation using Object create method");
let obj1 = {
  name: "Tom",
  age: 35,
  isMarried: false,
};

let obj2 = Object.create(obj1);

console.log(obj2);
console.log(obj2.name);
console.log(typeof obj2);
console.log(Object.getPrototypeOf(obj2));

// Adding method to an object
console.log("Adding method to an object");

let testRunner = "Local";
let machineID = "123sdewt3w";
let envFile = "test_config";

let reportData = {
  testID: "12345",
  status: "Pass",
  "Pass/Fail Flag": "Pass",
  totalTests: 100,
  totalPass: 80,
  passRate: function () {
    return (this.totalPass / this.totalTests) * 100;
  },
  passRate1() {
    return (this.totalPass / this.totalTests) * 100;
  },
  runDt: new Date(),
  runner: testRunner,
  macID: machineID ? machineID : "Unknown",
  [envFile]: {
    env: "test",
    url: "http://test.com",
  },
  scope: ["Regression", "Smoke"],
  previousRun: {
    status: "Pass",
    runID: "123",
  },
};

console.log(reportData.passRate());
console.log(reportData.passRate1());
console.log(reportData.runDt);
console.log(reportData.runner);
console.log(reportData.macID);
console.log(reportData.test_config);
console.log(reportData["Pass/Fail Flag"]);

let keys = Object.keys(reportData);
console.log(keys);

let values = Object.values(reportData);
console.log(values);

//Merge Objects

let num1 = {
  a: 1,
  b: 2,
  c: 3,
};

let num2 = {
  c: 4,
  d: 5,
  e: 6,
};

Object.assign(num1, num2);
console.log(num1);
console.log(num2);

let newnum = {
  ...num1,
  ...num2,
};
console.log(newnum);


for(let key in reportData){
    console.log(reportData[key])
}

for(let key in reportData){
    console.log(`Key: ${key}  Value: ${JSON.stringify(reportData[key])}`)
}

/**
 * Array Creation
 *
 * 1. Literals
 * 2. Constructor functions
 * Object creation using new key word
 *
 */
console.log("Array Creation");
var car = ["Volvo", "Toyota", "Tesla"];
console.log(car[1]);
car[1] = "BMW";
console.log(car[1]);

console.log(customer.cars[0]);

let arr = ["Apple", "Orange", "Banana"];
let arr1 = Array[("Apple", "Orange", "Banana")];
let arr2 = new Array("Apple", "Orange", "Banana");

console.log(arr);
console.log(`Single Element: ${arr[1]}`);
console.log(typeof arr);
console.log(arr.constructor);

arr[3] = "Mango";
arr.push("Kiwi");

console.log(arr);

let arr3 = [
  { name: "John", age: 23 },
  { name: "Bob", age: 33 },
];

let arr4 = [
  [1, 2, 3, 4, 5],
  ["one", "two", "three"],
];

/**
 * Access inner object property
 */
console.log("Access inner object property");
console.log(arr3[1]);
console.log(arr3[1].age);
console.log(arr4[1][2]);

let book = [
  {
    category: "Rference",
    author: "Nigel Rees",
    title: "Saying of the century",
    price: 8.95,
  },
  {
    category: "Fiction",
    author: "Evelyn Wron",
    title: "Sword of Honor",
    price: 12.25,
  },
  {
    category: "Fiction",
    author: "Haymon Nellville",
    title: "MObi Dick",
    isbn: "0-665-3347",
    price: 13.56,
  },
];

let pricearray = [];
for (let i = 0; i < book.length; i++) {
  let price = book[i].price;
  pricearray.push(price);
}

console.log(pricearray);

/**
 * Merging Arrays
 */

console.log("Merging Arrays");

let arr5 = [...arr2, ...arr4];
console.log(arr5);
console.log(arr5.length);

/**
 * USing map method
 */

console.log("USing map method");

let givenArray = ["100", "200", "300", "500"];
console.log(givenArray);
let modifiedArray = givenArray.map((element) => parseInt(element));
console.log(modifiedArray);

/**
 * Using filter method
 */

console.log("Using filter method");

let filteredBooks = book.filter((element) => element.price > 10);
console.log(filteredBooks);
