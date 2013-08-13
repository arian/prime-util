"use strict";

var expect = require("expect.js")
var object = require("../../shell/object")

describe("Object", function(){

    describe('merge', function(){

        it('should merge any object inside the passed in object, and should return the passed in object', function(){
            var a = {a:1, b:2, c: {a:1, b:2, c:3}}
            var b = {c: {d:4}, d:4}
            var c = {a: 5, c: {a:5}}

            var merger = object.merge(a, b)

            expect(merger).to.eql({a:1, b:2, c:{a:1, b:2, c:3, d:4}, d:4})
            expect(merger).to.be(a)

            expect(object.merge(a, b, c)).to.eql({a:5, b:2, c:{a:5, b:2, c:3, d:4}, d:4})
        })

    })

    describe('fromPath', function(){

        it('should return the value at a given path. Path should be passed as dot notation "child.parent.name"', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = object.fromPath(a, 'a.b.c')
            expect(value).to.eql('prime!')
        })

        it('should return the value at a given path. Path should be passed as array', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = object.fromPath(a, ['a', 'b', 'c'])
            expect(value).to.eql('prime!')
        })

        it('don\'t change anything at the main obj', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = object.fromPath(a, 'a.b.c')
            expect(a).to.eql({'a': {'b': {'c': 'prime!'}}})
        })

        it('should return "null" if path doesn\'t exist', function(){
            var a = {'a': {'b': {'c': 'prime!'}}}
            var value = object.fromPath(a, 'a.b.d')
            expect(value).to.be(null)
        })

    })

})
