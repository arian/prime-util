"use strict";

var prime = require("prime")
var mixin = require("../../prime/mixin")
var expect = require("expect.js")

var A = prime({
    fn1: function(){
        return "fn1"
    },
    fn2: function(){
        return "fn2"
    }
})

var B = prime({
    fn3: function(){
        return "fn3"
    },
    fn4: function(){
        return "fn4"
    }
})

var C = prime({
    fn5: function(){
        return "fn5"
    }
})

var D = prime({
    inherits: C,
    fn6: function(){
        return "fn6"
    }
})

describe("Prime Mixin", function(){

    it("should implement the methods from the other primes into A", function(){

        mixin(A, B, D)

        var a = new A()
        expect(a.fn1()).to.eql("fn1")
        expect(a.fn2()).to.eql("fn2")
        expect(a.fn3()).to.eql("fn3")
        expect(a.fn4()).to.eql("fn4")
        expect(a.fn5()).to.eql("fn5")
        expect(a.fn6()).to.eql("fn6")
    })

})
