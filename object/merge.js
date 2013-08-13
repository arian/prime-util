"use strict";

var type = require('prime/type')

function merge(object, key, value){
    if (typeof key == 'string'){
        if (type(object[key]) == 'object') merge(object[key], value)
        else object[key] = value
    } else for (var i = 0; i < arguments.length; i++){
        var obj = arguments[i]
        for (var k in obj) merge(object, k, obj[k])
    }
    return object
}

module.exports = merge
