const request = require("request");
const fs = require("fs");

let url = process.argv[2];
let path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("There is an error occurred: ", error);
  }
  if (response.statusCode <= 299 && response.statusCode >= 200) {
    fs.writeFile(path, body, (err) => {
      if (!path) {
        console.log("No path argument, please try again");
      } else if (err) {
        throw err;
      } else {
        console.log(
          `Downloaded and saved ${url} : ${body.length} bytes to ${path}.html`
        );
      }
    });
  }
});
