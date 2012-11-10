"use strict";

var slice = Array.prototype.slice

function add(prime, method, hmethod){
    var fn, parent = prime.parent.constructor
    while (!fn && parent){
        fn = parent.prototype[method]
        prime.prototype[hmethod] = fn
        parent = parent.parent
    }
}

function parentize(prime){
    var methods = slice.call(arguments, 1)

    prime.prototype.parent = function(method){
        var args = slice.call(arguments, 1)
        var hmethod = '_parent_' + method
        // lazy adding
        if (!prime.prototype[hmethod]) add(prime, method, hmethod)
        // call this._parent_method()
        return this[hmethod].apply(this, args)
    }

    // adding the methods before you use them is probably faster, because it
    // doesn't have to change the prime.prototype each time a new method is
    // called
    for (var l = methods.length, method; (method = methods[l--]);){
        add(prime, method, '_parent_' + method)
    }

    return prime
}

module.exports = parentize
