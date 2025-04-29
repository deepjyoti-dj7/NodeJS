const fs = require("fs");

// Get file stats
fs.stat("example.txt", (err, stats) => {
  if (err) {
    console.log("Error getting file stats:", err);
    return;
  }
  console.log("File stats:", stats);
  console.log("Is file? ", stats.isFile()); // Check if it's a file
  console.log("Is directory? ", stats.isDirectory()); // Check if it's a directory
});
