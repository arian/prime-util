"use strict";

var indexOf = require('mout/array/indexOf')

function contains(array, item, from){
    return indexOf(array, item, from) != -1
}

module.exports = contains
