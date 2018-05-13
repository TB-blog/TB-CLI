#!/usr/bin/env node

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from TB template')
  .command('theme', 'list available official themes')
  .parse(process.argv);
