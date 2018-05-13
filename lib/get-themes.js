const logger = require('./logger');
const request = require('request');

/**
 * Get TB themes.
 */
module.exports = (done) => {
  request({
    url: 'https://api.github.com/users/TB-blog/repos',
    headers: {
      'User-Agent': 'tb-cli'
    }
  }, (err, res, body) => {
    if (err) {
      logger.fatal(err);
    }
    const requestBody = JSON.parse(body);
    if (Array.isArray(requestBody)) {
      let themeList = [];
      requestBody.forEach((repo) => {
        if (repo.name.match('theme')) {
          themeList.push(repo.name);
        }
      });

      done(themeList);
    } else {
      logger.fatal(requestBody.message);
    }
  });
};
