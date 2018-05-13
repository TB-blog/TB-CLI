const { getGitUsername } = require('./git-user');

/**
 * Generate questions.
 *
 * @param {String} rawName
 * @param {Arrary} themeList
 */
module.exports = (rawName, themeList) => {
  return [
    // username
    {
      type: 'input',
      name: 'user',
      message: 'Github username:',
      validate: (value) => {
        return value.trim() ? true : 'Please input your Github username';
      }
    },

    // nickname
    {
      type: 'input',
      name: 'nickname',
      message: 'Nickname:',
      default: getGitUsername(),
      validate: (value) => {
        return value.trim() ? true : 'Please input nickname';
      }
    },

    // repo
    {
      type: 'input',
      name: 'repo',
      message: 'Blog repo name:',
      default: rawName
    },

    // token
    {
      type: 'input',
      name: 'token',
      message: 'Github token:',
      validate: (value) => {
        return value.trim() ? true : 'Please input your Github token';
      }
    },

    // theme
    {
      type: 'list',
      name: 'theme',
      message: 'Chooese a theme you want:',
      choices: themeList,
      default: 0
    },

    // useGitalk
    {
      type: 'confirm',
      name: 'useGitalk',
      message: 'Use comments module?',
      default: true
    },

    // gitalk clientID
    {
      type: 'input',
      name: 'gitalk_clientID',
      message: 'OAuth App\'s client ID:',
      validate: (value) => {
        return value.trim() ? true : 'Please input your OAuth App\'s client ID';
      },
      when: (answers) => {
        return answers.useGitalk;
      }
    },

    // gitalk clientSecret
    {
      type: 'input',
      name: 'gitalk_clientSecret',
      message: 'OAuth App\'s client secret:',
      validate: (value) => {
        return value.trim() ? true : 'Please input your OAuth App\'s client secret';
      },
      when: (answers) => {
        return answers.useGitalk;
      }
    },

    // gitalk repo
    {
      type: 'input',
      name: 'gitalk_repo',
      message: 'Comments repo for blog:',
      default: (answers) => {
        return answers.repo + '-comments';
      },
      when: (answers) => {
        return answers.useGitalk;
      }
    },

    // gitalk owner
    {
      type: 'input',
      name: 'gitalk_owner',
      message: 'OAuth App\'s owner:',
      default: (answers) => {
        return answers.user;
      },
      when: (answers) => {
        return answers.useGitalk;
      }
    },

    // gitalk admin
    {
      type: 'input',
      name: 'gitalk_admin',
      message: 'OAuth App\'s administrator:',
      default: (answers) => {
        return answers.user;
      },
      when: (answers) => {
        return answers.useGitalk;
      }
    }
  ];
};
