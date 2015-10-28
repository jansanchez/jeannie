###
index
@class index
@author Jan Sanchez
###

###
# Package Jeannie
###

Jeannie = require('./lib/jeannie')

###
# Expose library.
###

module.exports = (content) ->
	jeannie = new Jeannie(content)
	jeannie
