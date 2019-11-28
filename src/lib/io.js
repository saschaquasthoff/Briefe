import fs from 'fs';
import path from 'path';

/**
 * Reads and returns the content of a file.
 * @param {string} filename
 * @param {() => {}} callback
 */
export const readFile = (filename, callback) => fs.readFile(
  path.resolve(__dirname, filename), 'utf8', callback,
);

/**
 *
 * @param {string[]} filenames
 * @returns {Promise[]}
 */
export const readFiles = (filenames) => filenames.map((file) => new Promise((resolve, reject) => {
  readFile(file, (err, content) => {
    if (err) {
      reject(err);
    }

    resolve(content);
  });
}));

/**
 * Writes ´content´ to ´filename´.
 * @param {string} filename
 * @param {string} content
 * @param {() => {}} callback
 */
export const writeFile = (filename, content, callback) => fs.writeFile(
  path.resolve(__dirname, filename), content, callback,
);
