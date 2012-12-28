"use strict";

var prime = require('prime');

var Options = prime({
    
    setOptions: function(options) {
        this.options = this.options || {};
        
        if (!options) {
            return;
        }
        
        var Object = require('prime-util/types/object');
        this.options = Object.merge(this.options, options);
    }
    
});

module.exports = Options;