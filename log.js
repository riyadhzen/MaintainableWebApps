const chalk = require('chalk');

const log = {
  green: (data) => {
    console.log(chalk.green(data));
  },
  red: (data) => {
    console.log(chalk.red(data));
  },
  blue: (data) => {
    console.log(chalk.blue(data));
  }
};

module.exports = log;
