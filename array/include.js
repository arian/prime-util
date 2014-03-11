"use strict";

var contains = require('mout/array/contains')

function include(array, item){
    if (!contains(array, item)) array.push(item)
    return array
}

module.exports = include
