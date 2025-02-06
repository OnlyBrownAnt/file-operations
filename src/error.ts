import chalk from 'chalk';

export const logError = (functionName: string, error: any) => {
  console.error(chalk.red(`Error in ${functionName}: ${error.message}`));
  if (error.stack) {
    console.log(chalk.dim(error.stack));
  }
}
