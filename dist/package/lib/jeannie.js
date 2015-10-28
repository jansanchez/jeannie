
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
  this.output = this.safeLoad();
  this.transform();
  return this;
};

Jeannie.prototype.safeLoad = function() {
  var self;
  self = this;
  return yaml.safeLoad(this.settings.content);
};

Jeannie.prototype.transform = function() {
  var self;
  self = this;
  console.log(this.output);
};


/*
 * Expose library
 */

module.exports = Jeannie;
