
var Letter = (function() {
  'use strict';

  var Public = {},

      /** @type {Object} Required node modules. */
      fs     = require('fs'),
      util   = require('util'),
      jade   = require('jade'),
      yaml   = require('js-yaml'),
      marked = require('marked'),
      extend = require('xtend'),
      stylus = require('stylus'),
      exec   = require('child_process').exec,

      /** @type {String} The stylus file. */
      STYL = './styles/letter.styl',

      /** @type {String} The CSS file. */
      CSS = './styles/letter.css',

      /** @type {String} The jade template file. */
      JADE = './templates/letter.jade',

      /** @type {String} The markdown file. */
      MARKDOWN = './Briefe/' + process.argv[2] + '.markdown',

      /** @type {String} The html file. */
      HTML = './Briefe/' + process.argv[2] + '.html',

      /** @type {String} The pdf file. */
      PDF = './Briefe/' + process.argv[2] + '.pdf';



  /**
   * Initializes the letter parsing. Reads the markdown file for the provided letter.
   *
   * @constructor
   * @private
   *
   * @return  {Void}
   */
  var initialize = function() {
    read_file(MARKDOWN, parse);
  };



  /**
   * Reads and returns the content from ´file´.
   *
   * @private
   * @async
   *
   * @param   {String}    file      A file name
   * @param   {Function}  callback  A callback function
   *
   * @return  {Void}
   */
  var read_file = function(file, callback) {
    fs.readFile(file, {encoding: 'UTF-8'}, function(err, data) {
      if (err) {
        util.error(err);
        process.exit();
      }
      if (typeof callback === 'function') {
        callback(data);
      }
    });
  };



  /**
   * Writes ´content´ into ´file´. Executes a callback function afterwards.
   *
   * @private
   * @async
   *
   * @param   {String}    file      A file name
   * @param   {String}    content   The file content
   * @param   {Function}  callback  A callback function executed after writing the file content
   *
   * @return  {Void}
   */
  var write_file = function(file, content, callback) {
    fs.writeFile(file, content, callback);
  };



  /**
   * Parses a ´content´ string as a letter. The part between the two '---' is parsed as
   * a YAML frontmatter and the rest as markdown.
   *
   * @private
   *
   * @param  {String}  content  A letter content
   *
   * @return  {Void}
   */
  var parse = function(content) {
    var data = /^\-{3}([\s\S]+)\-{3}([\s\S]+)/m.exec(content);

    render_html(marked(data[2]), yaml.safeLoad(data[1]));
  };



  /**
   * Renders the HTML markup for the letter and writes it to file ´HTML´.
   *
   * @private
   *
   * @param   {String}  content      The content of the letter
   * @param   {String}  frontmatter  The frontmatter data of the letter
   *
   * @return  {Void}
   */
  var render_html = function(content, frontmatter) {
    var options = extend(frontmatter || {}, {
      pretty: true,
      content: content || ''
    });

    read_file(JADE, function(content) {
      write_file(HTML, jade.render(content, options), render_css);
    });
  };



  /**
   * Renders the stylus file to CSS and writes it to file ´CSS´.
   *
   * @todo: Because stylus is executed asynchronously, saving the pdf is executed as a callback
   *
   * @private
   * @async
   *
   * @return  {Void}
   */
  var render_css = function() {
    read_file(STYL, function(content) {
      stylus(content).render(function(err, data) {
        if (err) {
          util.error(err);
          process.exit();
        }
        write_file(CSS, data, render_pdf);
      });
    });
  };



  /**
   * Saves the rendered markup as a pdf file.
   *
   * @private
   *
   * @return  {Void}
   */
  var render_pdf = function() {
    exec('phantomjs ./print.js ' + HTML + ' ' + PDF,
      function (error, stdout, stderr) {

        switch (stdout) {
          case 0: case '':
            exec('open ' + PDF);
            break;
        }

        if (stderr) {
          util.error('stderr: ' + stderr);
        }

        if (error !== null) {
          util.error('exec error: ' + error);
        }
    });
  };



  initialize();
  return Public;
})();
