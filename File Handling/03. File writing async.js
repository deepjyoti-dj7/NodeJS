const fs = require("fs");

// Asynchronously write to a file
const content = "Hello, Node.js!";
fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.log("Error writing to the file:", err);
    return;
  }
  console.log("File written successfully!");
});
