"use strict";

// var type = require('mout/lang/kindOf')

// function merge(object, key, value){
//     if (typeof key == 'string'){
//         if (type(object[key]) == 'Object') merge(object[key], value)
//         else object[key] = value
//     } else for (var i = 0; i < arguments.length; i++){
//         var obj = arguments[i]
//         for (var k in obj) merge(object, k, obj[k])
//     }
//     return object
// }

// module.exports = merge
module.exports = require('mout/object/deepMixin')
