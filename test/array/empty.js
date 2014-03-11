"use strict";

var expect = require("expect.js")

var empty = require('../../array/empty')

describe('Array', function(){

    describe('empty', function(){

        it('should empty the array', function(){
            var arr = empty([1,2,3,4])
            expect(arr).to.eql([])
        })

    })

})
