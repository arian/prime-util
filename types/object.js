/*
object methods
*/"use strict";

var shell = require("prime/util/shell")
var type = require("prime/util/type")

var object = shell({

    merge: function(key, value){
        if (typeof key == 'string'){
            if (type(this[key]) == 'object' && type(value[key] == 'object')) object.merge(this[key], value)
            else this[key] = value
        } else for (var i = 0; i < arguments.length; i++){
            var obj = arguments[i]
            for (var k in obj) object.merge(this, k, obj[k])
        }
        return this
    }

})

module.exports = object
