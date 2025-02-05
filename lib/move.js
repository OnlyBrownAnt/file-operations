const fs = require('fs').promises;
const { logError } = require('../error.js');

async function moveFiles(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log(`Moved: ${source} -> ${destination}`);
  } catch (error) {
    logError('moveFiles', error);
  }
}

module.exports = { moveFiles };
