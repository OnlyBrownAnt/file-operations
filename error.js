const chalk = require('chalk');

const logError = (functionName, error) => {
  console.error(chalk.red(`Error in ${functionName}: ${error.message}`));
  if (error.stack) {
    console.log(chalk.dim(error.stack));
  }
}

module.exports = {
  logError
}
