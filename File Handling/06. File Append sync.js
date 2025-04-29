const fs = require("fs");

// Synchronously append to a file
const additionalContent = "\nAppended text.";
try {
  fs.appendFileSync("output.txt", additionalContent);
  console.log("Content appended successfully!");
} catch (err) {
  console.log("Error appending to the file:", err);
}
