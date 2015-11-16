###
Jeannie
@class Jeannie
@author Jan Sanchez
###

###
# Module dependencies.
###

yaml = require('js-yaml')
hbs = require('handlebars')
path = require('path')
fs = require('fs')
extend  = require('util')._extend

###
# Library.
###

Jeannie = (opts) ->
	@defaults = {}
	@settings = {}
	@json = {}
	@output = ''
	@setDefaults()
	@toExtend(opts)
	@getJson()
	@toProcess()
	return @

Jeannie::setDefaults = ()->
	@defaults = {
		debug: false,
		path: {
			interface: __dirname + '../../../../templates/interface.hbs'
		}
	}
	return

Jeannie::toExtend = (opts)->
	@settings = extend(@defaults, opts)
	if @settings.debug
		console.log(@settings)
	return

Jeannie::getJson = ()->
	@json = yaml.safeLoad(@settings.content)
	if @settings.debug
		console.log(@json)
	return

Jeannie::toProcess= ()->
	pathTemplate = path.join(@settings.path.interface)
	source = fs.readFileSync(pathTemplate).toString()
	template = hbs.compile(source)
	@output = template(@json)
	console.log(@output)
	return


###
# Expose library
###

module.exports = Jeannie
