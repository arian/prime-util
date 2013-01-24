/*
function methods
*/"use strict";

var fn = require("prime/es5/function")
var slice = Array.prototype.slice

fn.implement({

    bound: function(thisArg){
        var args = slice.call(arguments, 1),
            self = this
        return function(){
            return self.apply(thisArg, args.concat(slice.call(arguments)));
        }
    }

})

module.exports = fn
