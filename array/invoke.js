"use strict";

var slice = require('prime/array/slice')
var map = require('prime/array/map')

function invoke(array, methodName){
    var args = slice(arguments, 1)
    return map(array, function(item){
        return item[methodName].apply(item, args)
    })
}

module.exports = invoke
