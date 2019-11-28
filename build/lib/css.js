"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _stylus = _interopRequireDefault(require("stylus"));

var _io = require("./io");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* Compiles stylus to CSS.
* @param {() => {}} callback
* @returns {void}
*/
var compileCSS = function compileCSS(callback) {
  (0, _io.readFile)(_config.stylusFile, function (err, stylusCode) {
    if (err) {
      callback(err);
    }

    var paths = ["./".concat(_path["default"].resolve(__dirname, '/../assets/styles/partials/')), "./".concat(_path["default"].resolve(__dirname, '/../node_modules/'))];

    var renderFunc = function renderFunc(renderErr, css) {
      if (renderErr) {
        callback(renderErr);
      }

      (0, _io.writeFile)(_config.cssFile, css, callback);
    };

    (0, _stylus["default"])(stylusCode).set('paths', paths).set('sourcemap', {
      inline: true
    }).set('compress', true).render(renderFunc);
  });
};

var _default = compileCSS;
exports["default"] = _default;