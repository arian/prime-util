"use strict";

var get = require('mout/object/get')
var kindOf = require('mout/lang/kindOf')

function fromPath(source, parts) {
	var result
	if (kindOf(parts) == 'Array') {
		parts = parts.join('.')
	}
	result = get(source, parts)
	return result === undefined ? null : result
}

module.exports = fromPath
