"use strict";

var _require = require('./io'),
    readFile = _require.readFile;

var _require2 = require('../../mocks/html'),
    locales = _require2.locales,
    expectedMarkup = _require2.expectedMarkup;

var renderHTML = require('./html');

describe('renderHTML()', function () {
  test('should render a given template and write it to file', function (done) {
    renderHTML('test', locales, function (err) {
      expect(err).toBeNull();
      readFile('../../Briefe/test.html', function (err2, content) {
        expect(err2).toBeNull();
        expect(content).toBe(expectedMarkup);
        done();
      });
    });
  });
});