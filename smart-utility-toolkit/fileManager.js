const fs = require("fs");

// 1. Create File
fs.writeFile("data.txt", "Hello, this is my Smart Utility Toolkit.", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }

  console.log("File created successfully!");

  // 2. Read File
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    console.log("File content:", data);

    // 3. Update File
    fs.appendFile("data.txt", "\nThis file has been updated.", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }

      console.log("File updated successfully!");

      // 4. Delete File
      fs.unlink("data.txt", (err) => {
        if (err) {
          console.log("Error deleting file:", err);
          return;
        }

        console.log("File deleted successfully!");
      });
    });
  });
});
