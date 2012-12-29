"use strict";

var prime = require('prime');
var mixin = require('../../prime/mixin');
var expect = require('expect.js');
var Options = require('../../prime/options');

var A = prime({
    
    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
        }
    },
    
    constructor: function(options) {
        this.setOptions(options);
    }
    
});

mixin(A, Options);

describe('Options', function() {
    
    it ("should merge the options fields", function() {
        var a = new A({'b': 'B', 'c': {'e': 'E'}});
        
        expect(a.options).to.be.eql({'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}});
    });
    
});