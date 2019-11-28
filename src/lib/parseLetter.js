const parseYaml = require('js-yaml').safeLoad;
const parseMarkdown = require('marked');
const { readFiles } = require('./io');
const {
  markdownPath,
  senderFile,
  fileExtension,
  requiredProperties,
} = require('../config');

/**
 * @param {MetaData} metadata
 * @returns {boolean}
 */
const isARequiredPropertyMissing = (metadata) => requiredProperties.some((prop) => !metadata[prop]);
exports.isARequiredPropertyMissing = isARequiredPropertyMissing;

/**
 * Splits ´letter´ into the yaml frontmatter and the letter content.
 * @param {string} letter
 * @returns {string[]}
 */
const split = (letter) => {
  const [, metadata, content] = /^-{3}([\s\S]+)-{3}([\s\S]+)/m.exec(letter);

  return [metadata, content];
};
exports.split = split;

/**
 * Parses the content of a (markdown) letter file. Expects the letter file to have
 * a) a YAML frontmatter with the basic letter information and
 * b) the content of the letter.
 * @param {string} letter
 * @param {() => {}} callback
 * @returns {void}
 */
const parseLetter = (filename, callback) => {
  const readFilesPromises = readFiles([
    `${markdownPath}${filename}${fileExtension}`,
    senderFile,
  ]);

  Promise.all(readFilesPromises).then(([letter, sender]) => {
    const [metadata, content] = split(letter);

    const locales = {
      ...parseYaml(metadata),
      sender: parseYaml(sender),
      content: parseMarkdown(content),
    };

    if (isARequiredPropertyMissing(locales)) {
      callback('Not all required properties could be found!');
    }

    callback(null, locales);
  });
};
exports.parseLetter = parseLetter;
