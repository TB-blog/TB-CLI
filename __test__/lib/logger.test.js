const logger = require('../../lib/logger');

const NORMAL_INFO = 'test normal info';
const SUCCESS_INFO = 'test success info';
const FAIL_INFO = 'test fatal info';
const RAW_NAME = 'test';
const ERROR = new Error(FAIL_INFO);

describe('can log info', () => {
  test('normal info', () => {
    expect(logger.log(NORMAL_INFO)).toBeUndefined();
  });

  test('success info', () => {
    expect(logger.success(SUCCESS_INFO)).toBeUndefined();
  });

  test('fatal info', () => {
    expect(logger.fatal(FAIL_INFO)).toBeUndefined();
    expect(logger.fatal(ERROR)).toBeUndefined();
  });

  test('finish info', () => {
    expect(logger.info(RAW_NAME, true)).toBeUndefined();
    expect(logger.info(RAW_NAME, false)).toBeUndefined();
  });
});
