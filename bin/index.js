#! /usr/bin/env node

const program = require('commander');

program
   .version('0.0.5')

program
  .command('init')
  .alias('i')
  .description('generate TB blog platform')
  .action(() => {
    require('../command/init/index')();
  })

program
  .command('run')
  .alias('r')
  .description('runing TB blog platform')
  .action(() => {
    require('../command/run/index')();
  })

program
  .command('deploy')
  .alias('d')
  .option('-n, --name <name>', 'Change pm2 project name. Default: TB')
  .description('build & starting TB blog platform')
  .action((option) => {
    require('../command/deploy/index')(option.name);
  })

program.parse(process.argv)

if (!program.args.length) {
  program.help();
}
