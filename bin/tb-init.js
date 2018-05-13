#!/usr/bin/env node

const download = require('download-git-repo');
const program = require('commander');
const exists = require('fs').existsSync;
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const inquirer = require('inquirer');
const rm = require('rimraf').sync;
const logger = require('../lib/logger');
const generate = require('../lib/generate');
const checkVersion = require('../lib/check-version');

/**
 * Usage.
 */

program
  .usage('[project-name]');

/**
 * Help.
 */

program.on('--help', () => {
  console.log();
  console.log('  Example:');
  console.log();
  console.log(chalk.gray('    # create a new project with TB template'));
  console.log('    $ tb init my-blog');
  console.log();
});

/**
 * Help.
 */

function help () {
  program.parse(process.argv);
  if (program.args.length < 1) {
    return program.help();
  }
}
help();

/**
 * Settings.
 */

let rawName = program.args[0];
const template = 'TB-blog/TB';
const inPlace = !rawName || rawName === '.';
const to = path.resolve(rawName || '.');

/**
 * Padding.
 */

console.log();
process.on('exit', () => {
  console.log();
});

if (inPlace || exists(to)) {
  inquirer.prompt([{
    type: 'confirm',
    message: inPlace
      ? 'Generate project in current directory?'
      : 'Target directory exists. Continue?',
    name: 'ok'
  }]).then(answers => {
    if (answers.ok) {
      run();
    } else {
      logger.info(rawName, true);
    }
  }).catch(logger.fatal);
} else {
  run();
}

/**
 * Check, download and generate the project.
 */

function run () {
  checkVersion(() => {
    downloadAndGenerate(template);
  });
}

/**
 * Download a generate from a template repo.
 *
 * @param {String} template
 */

function downloadAndGenerate (template) {
  const spinner = ora('downloading template...');
  spinner.start();
  // Remove if local directory exists
  if (exists(rawName)) {
    rm(rawName);
  }
  download(template, rawName, (err) => {
    spinner.stop();
    if (err) {
      logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim());
    }

    generate(rawName, to, (res, err) => {
      if (err) {
        logger.fatal(err);
      }
      logger.info(rawName, false);
    });
  });
}
