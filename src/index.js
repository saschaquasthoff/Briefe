import { exec } from 'child_process';
import compileCSS from './lib/css';
import renderHTML from './lib/html';
import parseLetter from './lib/parseLetter';

/** @type {string} The name of the letter to be printed is provided by a command line parameter. */
const letterFile = process.argv[2];

if (!letterFile) {
  throw new Error('No letterFile to parse!');
}

compileCSS((cssError) => {
  if (cssError) {
    throw new Error(cssError);
  }

  parseLetter(letterFile, (parseError, locales) => {
    if (parseError) {
      throw new Error(parseError);
    }

    renderHTML(letterFile, locales, (renderError) => {
      if (renderError) {
        throw new Error(renderError);
      }

      exec(`open output/${letterFile}.html`);
    });
  });
});
