"use strict";

var contains = require('./contains')

function include(array, item){
    if (!contains(array, item)) array.push(item)
    return array
}

module.exports = include
