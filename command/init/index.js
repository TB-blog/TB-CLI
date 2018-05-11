'use strict';

const inquirer = require('inquirer');
const shell = require('shelljs');
const ora = require('ora');
const spinner = ora();
const questions = [
  // username
  {
    type: 'input',
    name: 'user',
    message: 'Github username:',
    validate: (value) => {
      return value.trim() ? true : 'Please enter your Github username';
    }
  },

  // nickname
  {
    type: 'input',
    name: 'nickname',
    message: 'Nickname:',
    default: 'Administrator',
    filter: (value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  // repo
  {
    type: 'input',
    name: 'repo',
    message: 'Blog repo name:',
    default: 'blog'
  },

  // token
  {
    type: 'input',
    name: 'token',
    message: 'Github token:',
    validate: (value) => {
      return value.trim() ? true : 'Please enter your Github token';
    }
  },

  // motto
  {
    type: 'input',
    name: 'motto',
    message: 'Motto:',
    default: 'A man who loves the world.'
  },

  // useGitalk
  {
    type: 'confirm',
    name: 'useGitalk',
    message: 'Use comment component?',
    default: true
  },

  // gitalk clientID
  {
    type: 'input',
    name: 'gitalk_clientID',
    message: 'Gitalk client ID:',
    validate: (value) => {
      return value.trim() ? true : 'Please enter your gitalk client ID';
    },
    when: (answers) => {
      return answers.useGitalk;
    }
  },

  // gitalk clientSecret
  {
    type: 'input',
    name: 'gitalk_clientSecret',
    message: 'Gitalk client secret:',
    validate: (value) => {
      return value.trim() ? true : 'Please enter your gitalk client secret';
    },
    when: (answers) => {
      return answers.useGitalk;
    }
  },

  // gitalk repo
  {
    type: 'input',
    name: 'gitalk_repo',
    message: 'Gitalk repo:',
    default: (answers) => {
      return answers.repo + '-comments';
    },
    validate: (value) => {
      return value.trim() ? true : 'Please enter your gitalk repo';
    },
    when: (answers) => {
      return answers.useGitalk;
    }
  },

  // gitalk owner
  {
    type: 'input',
    name: 'gitalk_owner',
    message: 'Gitalk owner:',
    default: (answers) => {
      return answers.user;
    },
    validate: (value) => {
      return value.trim() ? true : 'Please enter your gitalk owner';
    },
    when: (answers) => {
      return answers.useGitalk;
    }
  },

  // gitalk admin
  {
    type: 'input',
    name: 'gitalk_admin',
    message: 'Gitalk admin:',
    default: (answers) => {
      return answers.user;
    },
    validate: (value) => {
      return value.trim() ? true : 'Please enter your gitalk admin';
    },
    when: (answers) => {
      return answers.useGitalk;
    }
  }
];

module.exports = () => {
  if (!shell.which('git')) {
    spinner.fail('Sorry, this script requires git.');
    shell.exit(1);
  }

  inquirer.prompt(questions)
    .then((answers) => {
      const template = `
        {
          "token": "${answers.token}",
          "nickname": "${answers.nickname}",
          "user": "${answers.user}",
          "repo": "${answers.repo}",
          "motto": "${answers.motto}",
          "gitalk": {
            "useGitalk": ${answers.useGitalk},
            "clientID": "${answers.gitalk_clientID}",
            "clientSecret": "${answers.gitalk_clientSecret}",
            "repo": "${answers.gitalk_repo}",
            "owner": "${answers.gitalk_owner}",
            "admin": ["${answers.gitalk_admin}"]
          }
        }
      `;
      return template;
    })
    .then((template) => {
      require('./clone')(template);
    });
};
