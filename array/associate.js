"use strict";

function associate(array, keys){
    var obj = {}, length = Math.min(array.length, keys.length)
    for (var i = 0; i < length; i++) obj[keys[i]] = array[i]
    return obj
}

module.exports = associate
