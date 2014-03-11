"use strict";

var expect = require("expect.js")

var contains = require('../../array/contains')

describe('Array', function(){

    describe('contains', function(){

        it('should return false if the array does not contain the specified item', function(){
            expect(contains([0,1,2], 'not found')).to.not.be.ok()
        })

        it('should return true if the array does contains the specified item', function(){
            expect(contains([0,1,2], 2)).to.be.ok()
        })
    })

})
