'use strict';

const ora = require('ora');
const spinner = ora();

module.exports = (shell) => {
  if (!shell.test('-f', 'config.json')) {
    spinner.fail('There is an error while writing the config file.');
    shell.exit(1);
  }

  spinner.color = 'green';
  spinner.text = 'Installing dependences...';
  spinner.start();

  const cmd = 'yarn';

  shell.exec(cmd, {
    silent: true,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There are some errors while installing dependences.');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }

    spinner.succeed('Install dependences successfully.');
    console.log('');
    spinner.info('1. cd TB/');
    spinner.info('2. tb run');
    shell.exit(0);
  });
};
