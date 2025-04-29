const fs = require("fs");

// Synchronously delete a file
try {
  fs.unlinkSync("output.txt");
  console.log("File deleted successfully!");
} catch (err) {
  console.log("Error deleting the file:", err);
}
