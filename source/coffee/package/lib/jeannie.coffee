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
	@result = ''
	@transform()

	return @

Jeannie::safeLoad = ()->
	self = @
	return yaml.safeLoad(@settings.content)

Jeannie::transform = ()->
	self = @
	# console.log @output
	pathTemplate = path.join(__dirname + '../../../../templates/interface.hbs')
	source = fs.readFileSync(pathTemplate).toString()
	template = hbs.compile(source)
	@result = template(@output)
	return

###
# Expose library
###

module.exports = Jeannie

