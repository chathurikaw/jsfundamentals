console.log("Example 1");
async function getAPIRes() {
  const fetch = (await import("node-fetch")).default;
  let response = await fetch("https://api.github.com/users/github");
  let data = await response.json();
  console.log(`Example 1: ${data}`);
}

getAPIRes();

//example 2
console.log("Example 2");
async function fetchDataFromAPI(url) {
  try {
    const fetch = (await import("node-fetch")).default;
    const data = await new Promise(async (resolve, reject) => {
      setTimeout(() => {
        const data = fetch(url);
        if (data) {
          resolve(data);
        } else {
          reject("Couldn't connect");
        }
      });
    }, 2000);
    console.log(`Data  : ${data}`);
  } catch {
    console.log(`Error  : ${Error}`);
  }
}

fetchDataFromAPI("https://api.github.com/users/github")
  .then((data) => {
    console.log(data);
  })
  .catch(console.log(Error));
