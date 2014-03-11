"use strict";

var expect = require("expect.js")

var find = require('../../array/find')

describe('Array', function(){

    describe('find', function(){

        var arr = [1,2,3,4,5,6,7,8]

        it('should find a value from the array', function(){
            expect(find(arr, function(item){
                return item === 8
            })).to.be(8)
        })

        it('should return null', function(){
            expect(find(arr, function(item){
                return item === 10
            })).to.be(null)
        })

    })

})
