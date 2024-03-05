const fileSystemModule = require('./fileSystemModule');

(async () => {
  await fileSystemModule.listFiles("21-02-2024");

  await fileSystemModule.createDirectory('21-02-2024/node/newDirectory');

  await fileSystemModule.readFileContent('21-02-2024/node/newDirectory/newFile.txt');

  await fileSystemModule.writeToFile('21-02-2024/node/newDirectory/newFile.txt', "This is a new file content.");

})();
