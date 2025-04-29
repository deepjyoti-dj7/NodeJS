const fs = require("fs");

// Asynchronously check if a file exists
fs.access("example.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("File does not exist!");
  } else {
    console.log("File exists!");
  }
});
