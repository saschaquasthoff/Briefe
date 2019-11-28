import { exec } from 'child_process';
import compileCSS from './lib/css';
import renderHTML from './lib/html';
import parseLetter from './lib/parseLetter';

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

      exec(`open output/${letterFile}.html`);
    });
  });
});
