"use strict";

function find(array, fn, context){
    for (var i = 0, l = array.length; i < l; i++){
        var item = array[i]
        if (fn.call(context, item, i, array)) return item
    }
    return null
}

module.exports = find
