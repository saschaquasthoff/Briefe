"use strict";

var path = require('path');
/** @type {string} */


var markdownPath = "".concat(path.resolve(__dirname, '../data/letter/'), "/");
/** @type {string} */

var senderFile = path.resolve(__dirname, '../data/sender.yaml');
/** @type {string} */

var fileExtension = '.markdown';
/** @type {string[]} */

var requiredProperties = ['content', 'date', 'subject'];
/** @type {string} The pug template file. */

var templateFile = path.resolve(__dirname, '../assets/templates/letter.pug');
/** @type {string} The HTML file. */

var htmlFile = path.resolve(__dirname, '../output/%.html');
/** @type {string} */

var stylusFile = path.resolve(__dirname, '../assets/styles/letter.styl');
/** @type {string} */

var cssFile = path.resolve(__dirname, '../assets/styles/letter.css');
module.exports = {
  markdownPath: markdownPath,
  senderFile: senderFile,
  fileExtension: fileExtension,
  requiredProperties: requiredProperties,
  templateFile: templateFile,
  htmlFile: htmlFile,
  stylusFile: stylusFile,
  cssFile: cssFile
};