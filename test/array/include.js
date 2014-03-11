"use strict";

var expect = require("expect.js")

var include = require('../../array/include')

describe('Array', function(){

    describe('include', function(){

        it('should include only new items', function(){
            var arr = include([1,2,3,4], 1)
            expect(arr).to.eql([1,2,3,4])
            arr = include([1,2,3,4], 5)
            expect(arr).to.eql([1,2,3,4,5])
        })

    })

})
