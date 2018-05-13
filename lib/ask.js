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
          "repo": "${answers.repo}",
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
      return {
        config,
        theme: answers.theme,
        nickname: answers.nickname.toLowerCase()
      };
    });
};
