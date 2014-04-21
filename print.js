var system = require('system'),
    page   = require('webpage').create();

page.paperSize = {
  format:      'A4',
  orientation: 'portrait',
  border:      '1cm'
};

page.open(system.args[1], function(status) {
  page.render(system.args[2]);
  phantom.exit(0);
});
