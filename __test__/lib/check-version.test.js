const checkVersion = require('../../lib/check-version');

test('can check version', done => {
  function callback () {
    done();
  }

  checkVersion(callback);
});
