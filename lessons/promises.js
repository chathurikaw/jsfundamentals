/**
 * 1. Initialize a promise object
 * 2. Pending, fullfilled and rejected status
 * 3. How to get a resolved and rejected value
 * 4. UnhandledPromiserejction error
 * 5. Promise chaining
 */

let promiseObj = new Promise((resolve, reject) => {
  console.log("Executing the promise 1...");
  setTimeout(() => {
    resolve("Promise 1 Resolved...");
  }, 2000);
});

let promiseObj2 = new Promise((resolve, reject) => {
  console.log("Executing the promise 2...");
  setTimeout(() => {
    reject("Error Occured Promise 2...");
  }, 2000);
});

promiseObj
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

promiseObj2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

let promiseObj3 = new Promise((resolve, reject) => {
  console.log("Executing the promise 3...");
  if (2> 1) {
    setTimeout(() => {
      resolve("Promise 3 Resolved...");
    }, 2000);
  } else {
    reject("Error Occured Promise 3...");
  }
});

promiseObj3
  .then((res) => {
    console.log(res);
    return `${res} value updated`;
  })
  .then((updatedValue) => {
    console.log(updatedValue);
  })
  .catch((err) => {
    console.log(err);
  });
