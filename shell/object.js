/*
object methods
*/"use strict";

var object = require("prime/es5/object")
var type = require("prime/type")

object.implement({

    merge: function(key, value){
        if (typeof key == 'string'){
            if (type(this[key]) == 'object') object.merge(this[key], value)
            else this[key] = value
        } else for (var i = 0; i < arguments.length; i++){
            var obj = arguments[i]
            for (var k in obj) object.merge(this, k, obj[k])
        }
        return this
    },

    getValueForPath: function(path) {
        var pathSteps = path.split('.'),
            result = this

        for(var i = 0; i < pathSteps.length; i++) {
            result = (result[pathSteps[i]]) ? result[pathSteps[i]] : result[pathSteps[i]] = {}
        }

        return result
    }

})

module.exports = object
