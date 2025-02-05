const path = require('path');
const fs = require('fs').promises;
const { logError } = require('../error.js');

async function traverseDirectory(directory, callback) {
  try {
    const items = await fs.readdir(directory, { withFileTypes: true })
    for (const item of items) {
      const itemPath = path.join(directory, item.name);
      if (item.isDirectory()) {
        await traverseDirectory(itemPath, callback);
        await callback(itemPath, item);
      } else {
        await callback(itemPath, item);
      }
    }
  } catch (error) {
    logError('traverseDirectory', error);
  }
}

module.exports = {
  traverseDirectory
}
