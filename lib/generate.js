const ask = require('./ask');
const shell = require('shelljs');
const logger = require('./logger');
const fs = require('fs');
const ora = require('ora');
const spinner = ora();

/**
 * Generate a template.
 *
 * @param {String} rawName
 * @param {String} to
 * @param {Function} done
 */
module.exports = function generate (rawName, to, done) {
  ask(rawName)
    .then((data) => {
      const { config, nickname } = data;
      spinner.start('writing config file...');
      shell.cd(to);
      // write config file
      fs.writeFile('config.json', config, {
        flags: 'w'
      }, (err) => {
        if (err) {
          logger(err);
        }
        shell.sed('-i', 'tb', `${nickname}`, 'package.json');
        shell.sed('-i', 'TB', `${nickname}'s blog`, 'package.json');
        shell.sed('-i', 'Trevor <xizhouh@gmail.com>', `${nickname}`, 'package.json');
        spinner.succeed('write config file successfully.');
        return done(rawName);
      });
    });
};
