const { renameFiles } = require('./lib/rename.js'); 
const { deleteFiles } = require('./lib/delete.js');
const { moveFiles } = require('./lib/move.js');
const { copyFiles } = require('./lib/copy.js');

module.exports = {
  renameFiles,
  deleteFiles,
  moveFiles,
  copyFiles
}
