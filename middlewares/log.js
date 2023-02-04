const chalk = require("chalk");
console.green = (text) => {
  console.log(chalk.green(text));
};
console.error = (text) => {
  console.log(chalk.red(text));
};
