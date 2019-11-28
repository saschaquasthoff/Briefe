"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = exports.readFiles = exports.readFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Reads and returns the content of a file.
 * @param {string} filename
 * @param {() => {}} callback
 */
var readFile = function readFile(filename, callback) {
  return _fs["default"].readFile(_path["default"].resolve(__dirname, filename), 'utf8', callback);
};
/**
 *
 * @param {string[]} filenames
 * @returns {Promise[]}
 */


exports.readFile = readFile;

var readFiles = function readFiles(filenames) {
  return filenames.map(function (file) {
    return new Promise(function (resolve, reject) {
      readFile(file, function (err, content) {
        if (err) {
          reject(err);
        }

        resolve(content);
      });
    });
  });
};
/**
 * Writes ´content´ to ´filename´.
 * @param {string} filename
 * @param {string} content
 * @param {() => {}} callback
 */


exports.readFiles = readFiles;

var writeFile = function writeFile(filename, content, callback) {
  return _fs["default"].writeFile(_path["default"].resolve(__dirname, filename), content, callback);
};

exports.writeFile = writeFile;