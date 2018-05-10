'use strict';

const ora = require('ora');
const spinner = ora();
const fs = require('fs');

module.exports = (template, shell) => {
  spinner.color = 'green';
  spinner.text = 'Writing config.ts...';
  spinner.start();

  fs.writeFile('config.ts', template, {
    flags: 'w'
  }, (err) => {
    if (err) {
      spinner.fail('There is an error while writing the config.ts');
      console.log('');
      console.log(err);
      shell.exit(1);
    }
    spinner.succeed('Write config.ts successfully');
  });

  require('./install')(shell);
};
