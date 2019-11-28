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

export default compileCSS;
