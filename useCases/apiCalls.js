//Get Request
console.log("GET");
async function findPet(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      console.log("Data: ", data);
    }
  } catch (error) {
    console.log("Error ", error);
  }
}

async function findPetUsingPromises(url) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}

findPet("https://petstore.swagger.io/v2/pet/9223372016900015000");
findPetUsingPromises("https://petstore.swagger.io/v2/pet/9223372016900015000")
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });


//POST Request
console.log("POST");
const petData = {
  id: 12,
  category: {
    id: 0,
    name: "string",
  },
  name: "doggie",
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "string",
    },
  ],
  status: "available",
};

async function createPet(url, petObject) {
  const response = await fetch(url, {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Content type of the request
    },
    body: JSON.stringify(petObject), // Convert JavaScript object to JSON string
  });

  const data = await response.json();
  if (data) {
    console.log("Data: ", data);
  } else
    (error) => {
      console.log("Error ", error);
    };
}

createPet("https://petstore.swagger.io/v2/pet", petData);

//PUT Request
console.log("POST");
const UpdatepetData = {
  id: 12,
  category: {
    id: 0,
    name: "German Shephard",
  },
  name: "doggie",
  photoUrls: ["string"]
};

async function updatePet(url, petObject) {
  const response = await fetch(url, {
    method: "PUT", // HTTP method
    headers: {
      "Content-Type": "application/json", // Content type of the request
    },
    body: JSON.stringify(petObject), // Convert JavaScript object to JSON string
  });

  const data = await response.json();
  if (data) {
    console.log("Data: ", data);
  } else
    (error) => {
      console.log("Error ", error);
    };
}

updatePet("https://petstore.swagger.io/v2/pet", UpdatepetData);

//DELETE
console.log("DELETE");

async function deletePet(url, petID) {
  const response = await fetch(`${url}${petID}`, {
    method: "DELETE", // HTTP method
    headers: {
      "Content-Type": "application/json", // Content type of the request
    }
  });

  const data = await response.json();
  if (data) {
    console.log("Data: ", data);
  } else
    (error) => {
      console.log("Error ", error);
    };
}

deletePet("https://petstore.swagger.io/v2/pet/", "12");
