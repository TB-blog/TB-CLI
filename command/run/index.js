'use strict';

const shell = require('shelljs');
const ora = require('ora');
const spinner = ora();

module.exports = () => {
  const cmd = 'yarn run dev';

  shell.exec(cmd, {
    silent: false,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There are some errors while starting TB.');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }
  });
};
