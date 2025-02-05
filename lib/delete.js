const fs = require('fs').promises;
const path = require('path');
const { traverseDirectory } = require('./utils.js');
const { logError } = require('../error.js');

async function deleteFiles(directory, pattern) {
  try {
    traverseDirectory(directory, async (itemPath, item) => {
      const basename = path.basename(itemPath);
      if (pattern.test(basename)) {
        if (item.isDirectory()) {
          await fs.rm(itemPath, { recursive: true })
          console.log(`Deleted: ${itemPath}`);
        } else {
          await fs.unlink(itemPath)
          console.log(`Deleted: ${itemPath}`);
        }
      }
    })
  } catch (error) {
    logError('deleteFiles', error);
  }
}

module.exports = {
  deleteFiles
}
