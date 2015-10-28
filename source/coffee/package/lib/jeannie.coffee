###
Jeannie
@class Jeannie
@author Jan Sanchez
###

###
# Module dependencies.
###

yaml = require('js-yaml')
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
	@output = @safeLoad()
	@transform()

	return @

Jeannie::safeLoad = ()->
	self = @
	return yaml.safeLoad(@settings.content)

Jeannie::transform = ()->
	self = @
	#@output = @settings.content
	console.log @output
	return

###
# Expose library
###

module.exports = Jeannie

