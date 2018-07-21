const chalk = require('chalk');
const format = require('util').format;

/**
 * Prefix.
 */
const prefix = '   tb-cli';
const sep = chalk.gray('·');

/**
 * Log a `message` to the console.
 *
 * @param {String} message
 */
exports.log = function (...args) {
  const msg = format.apply(format, args);
  console.log();
  console.log(chalk.white(prefix), sep, msg);
};

/**
 * Log an error `message` to the console and exit.
 *
 * @param {String} message
 */
exports.fatal = function (...args) {
  if (args[0] instanceof Error) {
    args[0] = args[0].message.trim();
  }
  const msg = format.apply(format, args);
  console.log();
  console.error(chalk.red(prefix), sep, msg);
};

/**
 * Log a success `message` to the console and exit.
 *
 * @param {String} message
 */
exports.success = function (...args) {
  const msg = format.apply(format, args);
  console.log();
  console.log(chalk.white(prefix), sep, chalk.green(msg));
};

/**
 * Log a info `message` to the console and exit.
 */
exports.info = function (rawName, existDir) {
  if (!existDir) {
    console.log();
    console.log(`# ${chalk.green('Project initialization finished!')}`);
    console.log('# ========================');
  }
  console.log();
  console.log('To get started:');
  console.log();
  console.log(`  ${chalk.yellow('cd')} ${chalk.yellow(rawName)}`);
  console.log(`  ${chalk.yellow('npm install (or if using yarn: yarn)')}`);
  console.log(`  ${chalk.yellow('npm run dev')}`);
  console.log();
  console.log('Documentation can be found at https://github.com/TB-blog/TB-CLI');
};
