const fileSystemModule = require('./fileSystemModule');

// Demonstrate the usage of each function
(async () => {
  // List files in a specific directory
  await fileSystemModule.listFiles("21-02-2024");

  // Create a new directory
  await fileSystemModule.createDirectory('21-02-2024/node/newDirectory');

  // Read the content of a text file
  await fileSystemModule.readFileContent('21-02-2024/node/newDirectory/newFile.txt');

  // Write new content to a text file
  await fileSystemModule.writeToFile('21-02-2024/node/newDirectory/newFile.txt', "This is a new file content.");

})();
