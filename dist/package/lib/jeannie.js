
/*
Jeannie
@class Jeannie
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Jeannie, fs, hbs, path, yaml;

yaml = require('js-yaml');

hbs = require('handlebars');

path = require('path');

fs = require('fs');


/*
 * Library.
 */

Jeannie = function(opts) {
  this.data = {};
  this.settings = opts || {};
  this.output = this.safeLoad();
  this.result = '';
  this.transform();
  return this;
};

Jeannie.prototype.safeLoad = function() {
  var self;
  self = this;
  return yaml.safeLoad(this.settings.content);
};

Jeannie.prototype.transform = function() {
  var pathTemplate, self, source, template;
  self = this;
  pathTemplate = path.join(__dirname + '../../../../templates/interface.hbs');
  source = fs.readFileSync(pathTemplate).toString();
  template = hbs.compile(source);
  this.result = template(this.output);
};


/*
 * Expose library
 */

module.exports = Jeannie;
