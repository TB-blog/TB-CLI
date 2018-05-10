'use strict';

module.exports = (template, shell) => {
  shell.cd('TB');

  require('./write')(template, shell);
};
