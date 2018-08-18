const fetch = require("node-fetch");
const fs = require("fs");
const YOUR_API_HOST = "https://api.offcourse.io";
console.log(YOUR_API_HOST);

fetch(`${YOUR_API_HOST}/graphql`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: "GUEST" },
  body: JSON.stringify({
    variables: {},
    operationName: "",
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;
    fs.writeFile("./fragmentTypes.json", JSON.stringify(result.data), err => {
      if (err) {
        console.error("Error writing fragmentTypes file", err);
      } else {
        console.log("Fragment types successfully extracted!");
      }
    });
  });
