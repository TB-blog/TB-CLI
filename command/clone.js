'use strict';

const shell = require('shelljs');
const ora = require('ora');
const spinner = ora();
const projectUrl = 'https://github.com/TB-blog/TB';

module.exports = (template) => {
  spinner.color = 'green';
  spinner.text = 'Clone TB blog template...';
  spinner.start();

  const cmd = `git clone ${projectUrl}`;

  shell.exec(cmd, {
    silent: true,
    async: true
  }, (code, stdout, stderr) => {
    if (code !== 0) {
      spinner.fail('There is an error while cloning the project');
      console.log('');
      console.log(stderr);
      shell.exit(1);
    }

    spinner.succeed('Clone successfully');
    require('./cd')(template, shell);
  });
};
