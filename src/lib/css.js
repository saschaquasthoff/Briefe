const path = require('path');
const stylusParser = require('stylus');
const { readFile, writeFile } = require('./io');
const { stylusFile, cssFile } = require('../config');

/**
* Compiles stylus to CSS.
* @param {() => {}} callback
* @returns {void}
*/
module.exports = (callback) => {
  readFile(stylusFile, (err, stylusCode) => {
    if (err) {
      callback(err);
    }

    const paths = [
      `./${path.resolve(__dirname, '/../assets/styles/partials/')}`,
      `./${path.resolve(__dirname, '/../node_modules/')}`,
    ];

    const renderFunc = (renderErr, css) => {
      if (renderErr) {
        callback(renderErr);
      }

      writeFile(cssFile, css, callback);
    };

    stylusParser(stylusCode)
      .set('paths', paths)
      .set('sourcemap', { inline: true })
      .set('compress', true)
      .render(renderFunc);
  });
};
