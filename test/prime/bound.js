"use strict";

var expect = require("expect.js")
var prime = require("prime")
var bound = require("../../prime/bound")

var MyClass = prime({
    mixin: [bound],

    constructor: function(){
        this.props = []
    },

    method: function(value, i, array){
        this.props.push(value)
    },

    run: function(){
        [1, 2, 3].forEach(this.bound('method'))
    }

})

describe("bound", function(){

    it("should bind this to the method", function(){
        var a = new MyClass()
        a.run()
        expect(a.props).to.eql([1, 2, 3])
    })

    it("should use a previously bound method", function(){
        var a = new MyClass()
        expect(a.bound('method') === a.bound('method')).to.be.ok()
    })

})
