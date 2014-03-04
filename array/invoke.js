"use strict";

var slice = require('mout/array/slice')
var map = require('mout/array/map')

function invoke(array, methodName){
    var args = slice(arguments, 1)
    return map(array, function(item){
        return item[methodName].apply(item, args)
    })
}

module.exports = invoke
