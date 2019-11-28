"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = exports.isARequiredPropertyMissing = void 0;

var _jsYaml = require("js-yaml");

var _marked = _interopRequireDefault(require("marked"));

var _io = require("./io");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {MetaData} metadata
 * @returns {boolean}
 */
var isARequiredPropertyMissing = function isARequiredPropertyMissing(metadata) {
  return _config.requiredProperties.some(function (prop) {
    return !metadata[prop];
  });
};
/**
 * Splits ´letter´ into the yaml frontmatter and the letter content.
 * @param {string} letter
 * @returns {string[]}
 */


exports.isARequiredPropertyMissing = isARequiredPropertyMissing;

var split = function split(letter) {
  var _$exec = /^-{3}([\s\S]+)-{3}([\s\S]+)/m.exec(letter),
      _$exec2 = _slicedToArray(_$exec, 3),
      metadata = _$exec2[1],
      content = _$exec2[2];

  return [metadata, content];
};
/**
 * Parses the content of a (markdown) letter file. Expects the letter file to have
 * a) a YAML frontmatter with the basic letter information and
 * b) the content of the letter.
 * @param {string} letter
 * @param {() => {}} callback
 * @returns {void}
 */


exports.split = split;

var parseLetter = function parseLetter(filename, callback) {
  var readFilesPromises = (0, _io.readFiles)(["".concat(_config.markdownPath).concat(filename).concat(_config.fileExtension), _config.senderFile]);
  Promise.all(readFilesPromises).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        letter = _ref2[0],
        sender = _ref2[1];

    var _split = split(letter),
        _split2 = _slicedToArray(_split, 2),
        metadata = _split2[0],
        content = _split2[1];

    var locales = _objectSpread({}, (0, _jsYaml.safeLoad)(metadata), {
      sender: (0, _jsYaml.safeLoad)(sender),
      content: (0, _marked["default"])(content)
    });

    if (isARequiredPropertyMissing(locales)) {
      callback('Not all required properties could be found!');
    }

    callback(null, locales);
  });
};

var _default = parseLetter;
exports["default"] = _default;