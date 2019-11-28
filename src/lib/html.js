import pug from 'pug';
import { writeFile } from './io';
import { templateFile, htmlFile } from '../config';

/**
 * Renders the HTML markup using the Pug templating engine.
 * @param {string} letterName
 * @param {MetaData} locales
 * @param {() => {}} callback
 * @returns {void}
 */
const renderHTML = (letterName, locales, callback) => {
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

export default renderHTML;
