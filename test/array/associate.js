"use strict";

var expect = require("expect.js")

var associate = require('../../array/associate')

describe('Array', function(){

    describe('associate', function(){

        it('should associate an array with a specified array', function(){
            var obj = associate([1, 2, 3, 0, 0, 0], ['a', 'b', 'c', 'd'])
            expect(obj).to.eql({a:1, b:2, c:3, d:0})
        })

    })

})
