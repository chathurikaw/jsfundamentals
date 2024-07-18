for (let i = 0; i < 5; i++) {
  console.log("Hello World!!!");
}

console.log("*********");

var cars = ["Volvo", "Toyota", "Tesla"];
for (let car of cars) {
  console.log(car);
  if (car == "Toyota") {
    break;
  }
}

console.log("*********");

cars.forEach((c) => {
  console.log(c);
});

console.log("*********");
/**
 * scenario: foreach all arguments
 */
cars.forEach((val, index, array) => {
  console.log(val);
  console.log(index);
  console.log(array);
});

console.log("*********");

let arr = ["Apple", 10, "Orange", 34, 22, "Grapes"];
console.log(arr.length);
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  let arrElement = arr[i];
  // method 1
  if (typeof arrElement !== "number") continue;
  sum1 += arrElement;
  // method 2
  if (typeof arrElement == "number") {
    sum2 += arrElement;
  }
}
console.log(`Sum1 : ${sum1}`);
console.log(`Sum2 : ${sum2}`);

console.log("*********");
/**
 * scenarios: Using break
 * eg: - Switch to a specific window
 */

let windows = ["Google", "Youtube", "Amazon"];
for (let i = 0; i < windows.length; i++) {
  let window = windows[i];
  console.log(window);
  if (window === "Amazon") {
    //code relevant to relevant function (switch to window)
    break;
  }
}

console.log("*********");

/**
 * scenarios: while loop syntax
 * eg: - Retry until you get an API response
 */

let count = 1;
let isDataReturned = false;
while (isDataReturned == false && count <= 10) {
  console.log(count);
  if (count == 5) {
    isDataReturned = true;
  }
  count++;
}

console.log("*********");
/**
 * scenarios: for... in and for... of
 * for... in => objects
 * for... of => arrays
 */

let customer = {
  firstName: "John",
  lastName: "Smith",
  cars: ["Volvo", "Toyota", "Tesla"],
};

for (let key in customer) {
  console.log(key);
  console.log(customer[key]);
}

for (let window of windows) {
    console.log(window);
  }