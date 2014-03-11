"use strict";

var prime = require("prime")
var slice = require("mout/array/slice")

module.exports = prime({
    parent: function(method){
        var parent = this._parent || this.constructor.parent
        this._parent = parent.constructor.parent
        var result = parent[method].apply(this, slice(arguments, 1))
        this._parent = parent
        return result
    }
})
