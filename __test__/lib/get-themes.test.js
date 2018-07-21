const getThemeList = require('../../lib/get-themes');

test('can get theme list', done => {
  function callback (data) {
    expect(data instanceof Array).toBeTruthy();
    done();
  }

  getThemeList(callback);
});
