'use strict';

const ora = require('ora');
const spinner = ora();

module.exports = (template, shell) => {
  if (!shell.test('-e', 'TB')) {
    spinner.fail('There are some errors while cloning the project.');
    shell.exit(1);
  }

  shell.cd('TB');

  require('./write')(template, shell);
};
