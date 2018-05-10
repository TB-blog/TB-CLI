'use strict';

const ora = require('ora');
const spinner = ora();

module.exports = (shell) => {
  const cmd = 'yarn run dev';

  shell.exec(cmd, {
    silent: false,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There is an error while starting TB');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }
  });
};
