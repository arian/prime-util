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

})
