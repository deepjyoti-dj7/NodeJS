const fs = require("fs");

// Read the contents of a directory
fs.readdir("my_directory", (err, files) => {
  if (err) {
    console.log("Error reading directory:", err);
    return;
  }
  console.log("Directory contents:", files);
});
