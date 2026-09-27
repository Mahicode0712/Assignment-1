const fs = require("fs");

//Create File
const filePath = './dummy.txt';

// 1. Create the file and write three lines
const initialContent = 
`This is the first line of the file.
This is the second line, still learning fs module.
This is the third and final line of initial content.`;

fs.writeFile(filePath, initialContent, (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }

  console.log("File created successfully!");

  //Read File
  fs.readFile(data.text, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    console.log("File content:", data);

    //Update File
    fs.appendFile(filePath, "\nThis file has been updated.", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }

      console.log("File updated successfully!");

      //Delete File
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
