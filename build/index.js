"use strict";

var _child_process = require("child_process");

var _css = _interopRequireDefault(require("./lib/css"));

var _html = _interopRequireDefault(require("./lib/html"));

var _parseLetter = _interopRequireDefault(require("./lib/parseLetter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @type {string} The name of the letter to be printed is provided by a command line parameter. */
var letterFile = process.argv[2];

if (!letterFile) {
  throw new Error('No letterFile to parse!');
}

(0, _css["default"])(function (cssErr) {
  if (cssErr) {
    throw new Error(cssErr);
  }

  (0, _parseLetter["default"])(letterFile, function (err, locales) {
    if (err) {
      throw new Error(err);
    }

    (0, _html["default"])(letterFile, locales, function (renderErr) {
      if (renderErr) {
        throw new Error(renderErr);
      }

      (0, _child_process.exec)("open output/".concat(letterFile, ".html"));
    });
  });
});