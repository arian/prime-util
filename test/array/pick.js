"use strict";

var expect = require("expect.js")

var pick = require('../../array/pick')

describe('Array', function(){

    describe('pick', function(){

        it('should pick a value that is not null from the array', function(){
            expect(pick([null, undefined, true, 1])).to.be(true)
        })

        it('should return null', function(){
            expect(pick([])).to.be(null)
        })

    })

})
