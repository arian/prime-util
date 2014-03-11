"use strict";

var expect = require("expect.js")

var last = require('../../array/last')

describe('Array', function(){

    describe('last', function(){

        it('should return the last item in the array', function(){
            expect(last([1,2,3,0,0,0])).to.be(0)
            expect(last([3])).to.be(3)
        })

        it('should return null if there are no items', function(){
            expect(last([])).to.be(null)
        })

    })

})
