const fs = require('fs').promises;
const path = require('path');
const { traverseDirectory } = require('./utils.js');
const { logError } = require('../error.js');

async function renameFiles(directory, pattern, newName) {
  try {
    traverseDirectory(directory, async (itemPath, item) => {
      const baseName = path.basename(itemPath);
      const newBaseName = baseName.replace(pattern, newName);
      if (baseName != newBaseName) {
        const newFilePath = path.join(path.dirname(itemPath), newBaseName);
        await fs.rename(itemPath, newFilePath);
        console.log(`renameFiles: ${itemPath} => ${newFilePath}`)
      }
    })
  } catch (error) {
    logError('renameFiles', error);
  }
}

module.exports = {
  renameFiles
}
