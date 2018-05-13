const exec = require('child_process').execSync;

/**
 * Get git username.
 */
exports.getGitUsername = function () {
  let name;

  try {
    name = exec('git config --get user.name');
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1);
  return name || '';
};

/**
 * Get git email.
 */
exports.getGitEmail = function () {
  let email;

  try {
    email = exec('git config --get user.email');
  } catch (e) {}

  email = email && email.toString().trim();
  return email || '';
};
