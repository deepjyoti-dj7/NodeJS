const fs = require("fs");

// Asynchronously delete a file
fs.unlink("output.txt", (err) => {
  if (err) {
    console.log("Error deleting the file:", err);
    return;
  }
  console.log("File deleted successfully!");
});
