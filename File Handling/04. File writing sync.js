const fs = require("fs");

// Synchronously write to a file
const content = "Hello, Node.js!";
try {
  fs.writeFileSync("output.txt", content);
  console.log("File written successfully!");
} catch (err) {
  console.log("Error writing to the file:", err);
}
