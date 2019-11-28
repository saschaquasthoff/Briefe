const { exec } = require('child_process');
const compileCSS = require('./lib/css');
const renderHTML = require('./lib/html');
const { parseLetter } = require('./lib/parseLetter');

/** @type {string} The name of the letter to be printed is provided by a command line parameter. */
const letterFile = process.argv[2];

if (!letterFile) {
  throw new Error('No letterFile to parse!');
}

compileCSS((cssErr) => {
  if (cssErr) {
    throw new Error(cssErr);
  }

  parseLetter(letterFile, (err, locales) => {
    if (err) {
      throw new Error(err);
    }

    renderHTML(letterFile, locales, (renderErr) => {
      if (renderErr) {
        throw new Error(renderErr);
      }

      exec(`open Briefe/${letterFile}.html`);
    });
  });
});
