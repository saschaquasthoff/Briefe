const pug = require('pug');
const { writeFile } = require('./io');
const { templateFile, htmlFile } = require('../config');

/**
 * Renders the HTML markup using the Pug templating engine.
 * @param {string} letterName
 * @param {MetaData} locales
 * @param {() => {}} callback
 * @returns {void}
 */
module.exports = (letterName, locales, callback) => {
  const options = {
    ...locales,
    pretty: true,
  };

  pug.renderFile(templateFile, options, (renderErr, html) => {
    if (renderErr) {
      callback(renderErr);
    }

    const fileName = htmlFile.replace('%', letterName);

    writeFile(fileName, html, callback);
  });
};
