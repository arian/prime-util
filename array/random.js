"use strict";

var rand = require('prime/number/random')

function random(array){
    return (array.length) ? array[rand(0, array.length - 1)] : null
}

module.exports = random
