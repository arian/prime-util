"use strict";

var prime = require('prime')
var slice = Array.prototype.slice

function mixin(object){

    var mixins = slice.call(arguments, 1)

    for (var i = 0; i < mixins.length; i++){
        object.implement(prime.create(mixins[i].prototype))
    }

    return object

}

module.exports = mixin
