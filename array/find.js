"use strict";

var _find = require('mout/array/find')

function find(array, fn, context){
	var result = _find.apply(null, arguments)
	return result == undefined ? null : result
}

module.exports = find
