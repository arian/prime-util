"use strict";

var expect = require("expect.js")

var fromPath = require('../../object/fromPath')

describe("Object", function(){

    describe('fromPath', function(){

        it('should return the value at a given path. Path should be passed as dot notation "child.parent.name"', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = fromPath(a, 'a.b.c')
            expect(value).to.eql('prime!')
        })

        it('should return the value at a given path. Path should be passed as array', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = fromPath(a, ['a', 'b', 'c'])
            expect(value).to.eql('prime!')
        })

        it('don\'t change anything at the main obj', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = fromPath(a, 'a.b.c')
            expect(a).to.eql({'a': {'b': {'c': 'prime!'}}})
        })

        it('should return "null" if path doesn\'t exist', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = fromPath(a, 'a.b.d')
            expect(value).to.be(null)
        })

    })

})
