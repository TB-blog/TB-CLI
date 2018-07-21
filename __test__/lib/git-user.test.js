const { getGitUsername, getGitEmail } = require('../../lib/git-user');

test('can get user\'s local Github username', () => {
  expect(typeof getGitUsername() === 'string').toBeTruthy();
});

test('can get user\'s local Github email', () => {
  expect(typeof getGitEmail() === 'string').toBeTruthy();
});
