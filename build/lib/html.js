"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pug = _interopRequireDefault(require("pug"));

var _io = require("./io");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Renders the HTML markup using the Pug templating engine.
 * @param {string} letterName
 * @param {MetaData} locales
 * @param {() => {}} callback
 * @returns {void}
 */
var renderHTML = function renderHTML(letterName, locales, callback) {
  var options = _objectSpread({}, locales, {
    pretty: true
  });

  _pug["default"].renderFile(_config.templateFile, options, function (renderErr, html) {
    if (renderErr) {
      callback(renderErr);
    }

    var fileName = _config.htmlFile.replace('%', letterName);

    (0, _io.writeFile)(fileName, html, callback);
  });
};

var _default = renderHTML;
exports["default"] = _default;