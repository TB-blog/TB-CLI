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
    }
  ];
};
