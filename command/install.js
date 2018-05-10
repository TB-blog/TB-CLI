'use strict';

const ora = require('ora');
const spinner = ora();

module.exports = (shell) => {
  spinner.color = 'green';
  spinner.text = 'Installing dependences...';
  spinner.start();

  const cmd = 'yarn';

  shell.exec(cmd, {
    silent: true,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There is an error while installing dependences');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }

    spinner.succeed('Install dependences successfully');
    require('./run')(shell);
  });
};
