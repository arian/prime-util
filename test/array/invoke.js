"use strict";

var expect = require("expect.js")

var invoke = require('../../array/invoke')

describe('Array', function(){

    describe('invoke', function(){

        it('should invoke methods on the contained objects', function(){

            var Item = function(i){
                this.i = i
                this.myMethod = function(){
                    return this.i
                }
            }

            expect(invoke([new Item(3), new Item(1), new Item(2)], 'myMethod')).to.eql([3, 1, 2])

        })

    })

})
