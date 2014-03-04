"use strict";

var _find = require('mout/array/find')

function find(array, fn, context){
	var result = _find.apply(null, arguments)
	return result == undefined ? null : result
    // for (var i = 0, l = array.length; i < l; i++){
    //     var item = array[i]
    //     if (fn.call(context, item, i, array)) return item
    // }
    // return null
}

module.exports = find
