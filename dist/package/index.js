
/*
index
@class index
@author Jan Sanchez
 */

/*
 * Package Jeannie
 */
var Jeannie;

Jeannie = require('./lib/jeannie');


/*
 * Expose library.
 */

module.exports = function(content) {
  var jeannie;
  jeannie = new Jeannie(content);
  return jeannie;
};
