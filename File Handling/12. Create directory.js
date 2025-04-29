const fs = require("fs");

// Create a directory
fs.mkdir("my_directory", (err) => {
  if (err) {
    console.log("Error creating directory:", err);
    return;
  }
  console.log("Directory created successfully!");
});
