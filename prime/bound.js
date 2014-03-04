"use strict";

// credits to @cpojer's Class.Binds, released under the MIT license
// https://github.com/cpojer/mootools-class-extras/blob/master/Source/Class.Binds.js

var prime = require("prime")
var bind = require("mout/function/bind")

var bound = prime({

    bound: function(name){
        var bound = this._bound || (this._bound = {})
        return bound[name] || (bound[name] = bind(this[name], this))
    }

})

module.exports = bound
