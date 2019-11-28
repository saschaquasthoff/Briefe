import path from 'path';

/** @type {string} */
export const markdownPath = `${path.resolve(__dirname, '../data/letter/')}/`;

/** @type {string} */
export const senderFile = path.resolve(__dirname, '../data/sender.yaml');

/** @type {string} */
export const fileExtension = '.markdown';

/** @type {string[]} */
export const requiredProperties = [
  'content',
  'date',
  'subject',
];

/** @type {string} The pug template file. */
export const templateFile = path.resolve(__dirname, '../assets/templates/letter.pug');

/** @type {string} The HTML file. */
export const htmlFile = path.resolve(__dirname, '../output/%.html');

/** @type {string} */
export const stylusFile = path.resolve(__dirname, '../assets/styles/letter.styl');

/** @type {string} */
export const cssFile = path.resolve(__dirname, '../assets/styles/letter.css');
