const fs = require("fs");

// Synchronously check if a file exists
if (fs.existsSync("example.txt")) {
  console.log("File exists!");
} else {
  console.log("File does not exist!");
}
