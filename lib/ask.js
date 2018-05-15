const inquirer = require('inquirer');
const generateQuestions = require('./options');

/**
 * Ask questions, return results.
 *
 * @param {String} rawName
 * @param {Arrary} themeList
 */
module.exports = function ask (rawName, themeList) {
  return inquirer.prompt(generateQuestions(rawName, themeList))
    .then((answers) => {
      const config = `
        {
          "token": "${answers.token}",
          "nickname": "${answers.nickname}",
          "user": "${answers.user}",
          "repo": "${answers.repo}"
        }
      `;
      return {
        config,
        theme: answers.theme,
        nickname: answers.nickname.toLowerCase()
      };
    });
};
