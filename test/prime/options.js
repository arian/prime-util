"use strict";

var expect = require('expect.js')
var prime = require('prime')
var Options = require('../../prime/options')

var A = prime({
    mixin: [Options],

    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
        }
    },

    constructor: function(options){
        this.setOptions(options)
    }

})

var B = prime({
    mixin: [Options],

    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
        }
    },

    constructor: function(options){
        this.setOptions(options, {'f': 'FFF', 'g': 'ggg'}, {'g': 'G', 'h': 'hhh'})
    }

})

describe('Options', function(){

    it ("should merge the options fields", function(){
        var a = new A({'b': 'B', 'c': {'e': 'E'}})
        expect(a.options).to.be.eql({'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}})
    })

    it ("create new options object per instance", function(){
        var a1 = new A({'b': 'B', 'c': {'e': 'E'}})
        var a2 = new A({'b': 'BBB', 'c': {'e': 'EEE'}})
        expect(a1.options).to.not.be.eql(a2.options)
    })

    it ("merge all passed arguments", function(){
        var b = new B({'b': 'B', 'c': {'e': 'E'}})
        expect(b.options).to.be.eql({'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}, 'f': 'FFF', 'g': 'G', 'h': 'hhh'})

    })
})
