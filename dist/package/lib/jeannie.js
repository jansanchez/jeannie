
/*
Jeannie
@class Jeannie
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Jeannie, yaml;

yaml = require('js-yaml');


/*
 * Library.
 */

Jeannie = function(opts) {
  this.data = {};
  this.settings = opts || {};
  this.transform();
  return this;
};

Jeannie.prototype.load = function() {
  var self;
  self = this;
  yaml.safeLoad(this.settings.content);
};

Jeannie.prototype.transform = function() {
  var self;
  self = this;
  console.log('ejecutando transform');
  this.output = this.settings.content;
  console.log(this.output);
};


/*
 * Expose library
 */

module.exports = Jeannie;
