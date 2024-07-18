async function getAPIRes() {
  const fetch = (await import("node-fetch")).default;
  fetch("https://api.github.com/users/github")
    .then((res) => {
      return res.json();
    })
    .then((updatedRes) => {
      console.log(updatedRes);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAPIRes();

//example 2
async function fetchDataFromAPI(url) {
  const fetch = (await import("node-fetch")).default;
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const data = fetch(url);
      if (data) {
        resolve(data);
      } else {
        reject("Data fetching Failed");
      }
    }, 1000);
  });
}

fetchDataFromAPI("https://api.github.com/users/github")
  .then((data)=>{console.log(data)})
  .catch("Error");
