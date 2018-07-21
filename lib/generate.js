const ask = require('./ask');
const getThemeList = require('./get-themes');
const download = require('download-git-repo');
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
  getThemeList((themeList) => {
    ask(rawName, themeList)
      .then((data) => {
        const { config, theme, nickname } = data;
        spinner.start(`downloading ${theme}...`);
        shell.cd(to);

        // download theme files
        download(`TB-blog/${theme}`, 'theme', (err) => {
          spinner.stop();
          if (err) {
            logger.fatal('Failed to download ' + theme + ': ' + err.message.trim());
          }
          spinner.succeed(`download ${theme} successfully.`);
          spinner.start('writing config file...');
          shell.cd(to);

          // write config file
          fs.writeFile('config.json', config, {
            flags: 'w'
          }, (err) => {
            if (err) {
              logger.log(err);
            }
            shell.sed('-i', 'tb', `${nickname}`, 'package.json');
            shell.sed('-i', 'TB', `${nickname}'s blog`, 'package.json');
            shell.sed('-i', 'Trevor <xizhouh@gmail.com>', `${nickname}`, 'package.json');
            spinner.succeed('write config file successfully.');
            return done(rawName);
          });
        });
      });
  });
};
