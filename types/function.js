/*
function methods
*/"use strict";

var shell = require("prime/util/shell")
var slice = Array.prototype.slice

var fn = shell({

    bound: function(thisArg){
        var args = slice.call(arguments, 1),
            self = this
        return function(){
            return self.apply(thisArg, args.concat(slice.call(arguments)));
        }
    }

})

module.exports = fn
