
/*
Jeannie
@class Jeannie
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Jeannie, extend, fs, hbs, path, yaml;

yaml = require('js-yaml');

hbs = require('handlebars');

path = require('path');

fs = require('fs');

extend = require('util')._extend;


/*
 * Library.
 */

Jeannie = function(opts) {
  this.defaults = {};
  this.settings = {};
  this.json = {};
  this.output = [];
  this.setDefaults();
  this.toExtend(opts);
  this.getJson();
  this.toProcess('header');
  return this;
};

Jeannie.prototype.setDefaults = function() {
  this.defaults = {
    debug: false,
    path: {
      header: __dirname + '../../../../templates/header.hbs',
      implementation: __dirname + '../../../../templates/implementation.hbs'
    }
  };
};

Jeannie.prototype.toExtend = function(opts) {
  this.settings = extend(this.defaults, opts);
  if (this.settings.debug) {
    console.log(this.settings);
  }
};

Jeannie.prototype.getJson = function() {
  this.json = yaml.safeLoad(this.settings.content);
  if (this.settings.debug) {
    console.log(this.json);
  }
};

Jeannie.prototype.toProcess = function(type) {
  var pathTemplate, source, template;
  pathTemplate = path.join(this.settings.path[type]);
  source = fs.readFileSync(pathTemplate).toString();
  template = hbs.compile(source);
  this.output[type] = template(this.json);
  if (this.settings.debug) {
    console.log(this.output);
  }
};


/*
 * Expose library
 */

module.exports = Jeannie;
