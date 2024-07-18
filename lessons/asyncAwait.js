let promiseObj = new Promise((resolve, reject) => {
  console.log("Executing the promise 3...");
  if (2 < 1) {
    setTimeout(() => {
      resolve("Promise 3 Resolved...");
    }, 2000);
  } else {
    reject("Error Occured Promise 3...");
  }
});

async function getData() {
  try {
    let res = await promiseObj;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData();
