###
Jeannie
@class Jeannie
@author Jan Sanchez
###

###
# Module dependencies.
###

#util = require('util')
#through = require('through2')
#Buffer = require('buffer').Buffer
#extend = util._extend
#unescapeHtml = require('unescape-html')

###
# Library.
###

Jeannie = (opts) ->

	@data = {}
	@settings = opts or {}
	@transform()

	return @

Jeannie::transform = ()->
	self = @
	console.log 'ejecutando transform'
	@output = @settings.content
	console.log @output
	return

###
# Expose library.
###

module.exports = Jeannie
