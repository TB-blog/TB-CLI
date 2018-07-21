const generateOptions = require('../../lib/options');
const mockData = {
  rawName: 'test',
  themeList: []
};

function isFunc (val) {
  return Object.prototype.toString.call(val) === '[object Function]';
}

test('can generate inquirer options', () => {
  expect(generateOptions({ ...mockData }) instanceof Array).toBeTruthy();
});

test('can trigger validate', () => {
  generateOptions({ ...mockData }).forEach((e) => {
    if (isFunc(e.validate)) {
      expect(e.validate('test')).toBeTruthy();
    }
  });
});

test('can trigger validate error', () => {
  generateOptions({ ...mockData }).forEach((e, idx) => {
    if (isFunc(e.validate)) {
      if (idx === 0) expect(e.validate('')).toMatch(/Please input your Github username/);
      if (idx === 1) expect(e.validate('')).toMatch(/Please input nickname/);
      if (idx === 3) expect(e.validate('')).toMatch(/Please input your Github token/);
    }
  });
});
