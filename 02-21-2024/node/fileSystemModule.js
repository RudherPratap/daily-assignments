const fs = require("fs/promises");

async function listFiles(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    console.log(`Files in ${directoryPath}:`, files);
  } catch (error) {
    console.error(`Error listing files: ${error.message}`);
  }
}

async function createDirectory(directoryName) {
  try {
    await fs.mkdir(directoryName);
    console.log(`Directory '${directoryName}' created successfully.`);
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
}

async function readFileContent(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(`Content of ${filePath}:\n${content}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

async function writeToFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`Content written to ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error writing to file: ${error.message}`);
  }
}

module.exports = {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile
};
