const fs = require("fs");

// Asynchronously append to a file
const additionalContent = "\nAppended text.";
fs.appendFile("output.txt", additionalContent, (err) => {
  if (err) {
    console.log("Error appending to the file:", err);
    return;
  }
  console.log("Content appended successfully!");
});
