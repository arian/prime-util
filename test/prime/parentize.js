"use strict";

var expect = require('expect.js')
var prime = require('prime')
var parentize = require('../../prime/parentize')

describe('parentize', function(){

    it('should parentize a prime', function(){
        var A = prime({
            a: function(c){ return 'a' + c + this.d() },
            d: function(){ return 'd' }
        })
        var B = prime({
            mixin: [parentize],
            inherits: A,
            a: function() {
                return this.parent('a', 'c') + 'b'
            }
        })
        var b = new B()
        var res
        expect(function(){
            res = b.a()
        }).not.to.throwException()
        expect(res).to.be('acdb')
    })

    it('should parentize a method from a grandparent class', function(){
        var A = prime({
            a: function(){ return 'a' }
        })
        var B = prime({inherits: A, c: function(){
            return 'b'
        }})
        var C = prime({inherits: B, c: function(){
            return this.parent('c') + 'c'
        }})
        var D = prime({
            mixin: [parentize],
            inherits: C,
            a: function(){
                return this.parent('a') + 'b'
            },
            c: function(){
                return this.parent('c') + 'd' + this.parent('c')
            }
        })
        var d = new D()
        expect(d.a()).to.be('ab')
        expect(d.c()).to.be('bcdbc')
    })

})
