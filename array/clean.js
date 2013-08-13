"use strict";

var filter = require('prime/array/filter')

function clean(array){
    return filter(array, function(item){
        return item != null
    })
}

module.exports = clean
