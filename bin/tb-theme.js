#!/usr/bin/env node

const logger = require('../lib/logger');
const request = require('request');
const chalk = require('chalk');

/**
 * Padding.
 */

console.log();
process.on('exit', () => {
  console.log();
});

/**
 * List repos.
 */

request({
  url: 'https://api.github.com/users/TB-blog/repos',
  headers: {
    'User-Agent': 'tb-cli'
  }
}, (err, res, body) => {
  if (err) logger.fatal(err);
  const requestBody = JSON.parse(body);
  if (Array.isArray(requestBody)) {
    console.log('  Available official themes:');
    console.log();
    requestBody.forEach(repo => {
      if (repo.name.match('theme')) {
        console.log(
          '  ' + chalk.yellow('★') +
          '  ' + chalk.blue(repo.name) +
          ' - ' + repo.description);
      }
    });
  } else {
    console.error(requestBody.message);
  }
});
