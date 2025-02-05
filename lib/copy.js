const fs = require('fs').promises;
const { logError } = require('../error.js');

async function copyFiles(source, destination) {
  try {
    await fs.cp(source, destination, { recursive: true });
    console.log(`Copied: ${source} -> ${destination}`);
  } catch (error) {
    logError('copyFiles', error);
  }
}

module.exports = { copyFiles };
