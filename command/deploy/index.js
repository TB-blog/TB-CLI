'use strict';

const shell = require('shelljs');
const ora = require('ora');
const spinner = ora();

module.exports = (name) => {
  if (!shell.which('pm2')) {
    spinner.fail('Sorry, this script requires pm2.');
    console.log('');
    spinner.info('Please try: npm install pm2 -g');
    shell.exit(1);
  }

  spinner.color = 'green';
  spinner.text = 'Building...';
  spinner.start();

  const cmd = 'yarn run build';

  shell.exec(cmd, {
    silent: true,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There are some errors while building TB.');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }

    spinner.succeed('Build successfully.');
    require('./pm2')(name);
  });
};
