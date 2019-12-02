import path from 'path';
import stylusParser from 'stylus';
import { readFile, writeFile } from './io';
import { stylusFile, cssFile } from '../config';

/**
* Compiles stylus to CSS.
* @param {() => {}} callback
* @returns {void}
*/
const compileCSS = (callback) => {
  readFile(stylusFile, (fileError, stylusCode) => {
    if (fileError) {
      callback(fileError);
    }

    const paths = [
      `./${path.resolve(__dirname, '/../node_modules/')}`,
      `./${path.resolve(__dirname, '/../assets/styles/partials/')}`,
    ];

    const renderFunc = (renderError, css) => {
      if (renderError) {
        callback(renderError);
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

export default compileCSS;
