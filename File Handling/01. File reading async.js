const fs = require("fs");

// Asynchronously read a file
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading the file:", err);
    return;
  }
  console.log("File content:", data);
});
