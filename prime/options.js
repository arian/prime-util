"use strict";

var prime = require('prime')
var object = require('../shell/object')

var Options = prime({

    setOptions: function(options){
        var args = [{}, this.options]
        args.push.apply(args, arguments)
        this.options = object.merge.apply(null, args)
        return this
    }

})

module.exports = Options
