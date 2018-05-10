'use strict';

const shell = require('shelljs');
const ora = require('ora');
const spinner = ora();

module.exports = (name) => {
  const cmd = name
    ? `pm2 start npm --name '${name}' -- start`
    : 'pm2 start npm --name \'TB\' -- start';

  shell.exec(cmd, {
    silent: true,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There are some errors while using pm2.');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }

    spinner.succeed('Deploy successfully.');

    console.log('');
    spinner.info('Server started at 127.0.0.1:8080');
    shell.exit(0);
  });
};
