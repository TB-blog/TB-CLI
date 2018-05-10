#! /usr/bin/env node

const program = require('commander');

program
  .command('init')
  .alias('i')
  .description('Generate TB blog platform')
  .action(() => {
    require('../command/init')();
  })
  .on('--help', () => {
    console.log('  Examples:')
    console.log('')
    console.log('$ tb init')
    console.log('$ tb')
  })

program.parse(process.argv)

if (!program.args.length) {
  program.help();
}
