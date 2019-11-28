const path = require('path');

/** @type {string} */
const markdownPath = `${path.resolve(__dirname, '../data/letter/')}/`;

/** @type {string} */
const senderFile = path.resolve(__dirname, '../data/sender.yaml');

/** @type {string} */
const fileExtension = '.markdown';

/** @type {string[]} */
const requiredProperties = [
  'content',
  'date',
  'subject',
];

/** @type {string} The pug template file. */
const templateFile = path.resolve(__dirname, '../assets/templates/letter.pug');

/** @type {string} The HTML file. */
const htmlFile = path.resolve(__dirname, '../output/%.html');

/** @type {string} */
const stylusFile = path.resolve(__dirname, '../assets/styles/letter.styl');

/** @type {string} */
const cssFile = path.resolve(__dirname, '../assets/styles/letter.css');

module.exports = {
  markdownPath,
  senderFile,
  fileExtension,
  requiredProperties,
  templateFile,
  htmlFile,
  stylusFile,
  cssFile,
};
