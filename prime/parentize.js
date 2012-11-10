"use strict";

var prime = require('prime')
var slice = Array.prototype.slice

function add(prime, method, hmethod){
    var fn, parent = prime.parent.constructor
    while (!fn && parent){
        fn = parent.prototype[method]
        prime.prototype[hmethod] = fn
        parent = parent.parent
    }
}

var parentize = prime({
    parent: function(method){
        var args = slice.call(arguments, 1)
        var prime = this.constructor
        var hmethod = '_parent_' + method
        // lazy adding
        if (!prime.prototype[hmethod]) add(prime, method, hmethod)
        // call this._parent_method()
        return this[hmethod].apply(this, args)
    }
})

module.exports = parentize
