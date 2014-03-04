"use strict";

// var hasOwn = require('mout/object/hasOwn')

// function fromPath(source, parts){
//     if (typeof parts == 'string') parts = parts.split('.')
//     for (var i = 0, l = parts.length; i < l; i++){
//         if (hasOwn(source, parts[i])) source = source[parts[i]]
//         else return null
//     }
//     return source
// }

// module.exports = fromPath
var get = require('mout/object/get')
var kindOf = require('mout/lang/kindOf')

function fromPath(source, parts) {
	var result
	if (kindOf(parts) == 'Array') {
		parts = parts.join('.')
	}
	result = get(source, parts)
	return result == undefined ? null : result
}

module.exports = fromPath
