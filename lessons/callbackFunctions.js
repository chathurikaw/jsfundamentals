function Printmsg(msg) {
  console.log("Callback Function");
  console.log(msg);
}

function greet(name, greeter) {
  console.log("Main Function");
  let greetmsg = `Hello ${name}`;
  greeter(greetmsg);
}

function greet2(name, greeter) {
  console.log("Main Function with return value");
  let greetmsg = `Hello ${name}`;
  return greeter(greetmsg);
}

//option 1 - Calling already available function
greet("John", Printmsg);

//option 2 - defining callback function inside main function
greet("Rob", function (val) {
  console.log(`Option 2: ${val}`);
});

//option 3 - Using Arrow function to define callback function
greet("Steve", (res) => {
  console.log(`Option 3: ${res}`);
});

// Returning value from callback function
let result = greet2("Neil", (res) => {
  return `Option 3: ${res}`;
});
console.log(result);
