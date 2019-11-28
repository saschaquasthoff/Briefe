const fs = require('fs');
const path = require('path');

/**
 * Reads and returns the content of a file.
 * @param {string} filename
 * @param {() => {}} callback
 */
const readFile = (filename, callback) => fs.readFile(
  path.resolve(__dirname, filename), 'utf8', callback,
);
module.exports.readFile = readFile;

/**
 *
 * @param {string[]} filenames
 * @returns {Promise[]}
 */
const readFiles = (filenames) => filenames.map((file) => new Promise((resolve, reject) => {
  readFile(file, (err, content) => {
    if (err) {
      reject(err);
    }

    resolve(content);
  });
}));
module.exports.readFiles = readFiles;

/**
 * Writes ´content´ to ´filename´.
 * @param {string} filename
 * @param {string} content
 * @param {() => {}} callback
 */
const writeFile = (filename, content, callback) => fs.writeFile(
  path.resolve(__dirname, filename), content, callback,
);
module.exports.writeFile = writeFile;
