const fs = require("fs");

// Synchronously read a file
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.log("Error reading the file:", err);
}
