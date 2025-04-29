const fs = require("fs");

// Delete a directory
fs.rmdir("my_directory", (err) => {
  if (err) {
    console.log("Error deleting directory:", err);
    return;
  }
  console.log("Directory deleted successfully!");
});
