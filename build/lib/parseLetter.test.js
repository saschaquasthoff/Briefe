"use strict";

var fs = require('fs');

var path = require('path');

var _require = require('../../mocks/parseLetter'),
    metadata = _require.metadata,
    content = _require.content,
    expectedLocales = _require.expectedLocales;

var _require2 = require('./parseLetter'),
    isARequiredPropertyMissing = _require2.isARequiredPropertyMissing,
    split = _require2.split,
    parseLetter = _require2.parseLetter;

describe('isARequiredPropertyMissing()', function () {
  test('metadata contains all required properties', function () {
    expect(isARequiredPropertyMissing({
      subject: 'subject',
      date: 'date',
      content: 'content'
    })).toBe(false);
  });
  test('metadata missing at least one required property', function () {
    expect(isARequiredPropertyMissing({})).toBe(true);
  });
});
describe('split()', function () {
  test('should split a letter file in metadata and content', function () {
    var letter = fs.readFileSync(path.resolve(__dirname, '../../data/letter/test.markdown'), 'utf8');
    expect(split(letter)).toMatchObject([metadata, content]);
  });
});
describe('parseLetter()', function () {
  test('should read the letter data from a given filename and parse it', function (done) {
    parseLetter('test', function (err, locales) {
      expect(err).toBe(null);
      expect(locales).toStrictEqual(expectedLocales);
      done();
    });
  });
});