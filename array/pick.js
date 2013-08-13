"use strict";

function pick(array){
    for (var i = 0, l = array.length; i < l; i++){
        if (array[i] !== null && array[i] !== undefined) return array[i]
    }
    return null
}

module.exports = pick
