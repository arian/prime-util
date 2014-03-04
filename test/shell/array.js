"use strict";

var expect = require("expect.js")
var insert = require('mout/array/insert')

var clean = require('../../array/clean')
var invoke = require('../../array/invoke')
var associate = require('../../array/associate')
var contains = require('../../array/contains')
var append = require('../../array/append')
var last = require('../../array/last')
var random = require('../../array/random')
var include = require('../../array/include')
var combine = require('../../array/combine')
var empty = require('../../array/empty')
var pick = require('../../array/pick')
var find = require('../../array/find')

describe('Array', function(){

    describe('clean', function(){

        it('should clean an array from undefined and null values', function(){
            var items = [null, 1, 0, true, false, "foo", undefined]
            var arr = clean(items)
            expect(arr).to.eql([1, 0, true, false, "foo"])
        })

    })

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

    describe('associate', function(){

        it('should associate an array with a specified array', function(){
            var obj = associate([1, 2, 3, 0, 0, 0], ['a', 'b', 'c', 'd'])
            expect(obj).to.eql({a:1, b:2, c:3, d:0})
        })

    })

    describe('contains', function(){

        it('should return false if the array does not contain the specified item', function(){
            expect(contains([0,1,2], 'not found')).to.not.be.ok()
        })

        it('should return true if the array does contains the specified item', function(){
            expect(contains([0,1,2], 2)).to.be.ok()
        })
    })

    describe('append', function(){

        it('should append to an array', function(){
            var a = [1,2,4]
            var b = [2,3,4,5]
            append(a, b)
            expect(a).to.eql([1,2,4,2,3,4,5])
            expect(b).to.eql([2,3,4,5])
        })

    })

    describe('last', function(){

        it('should return the last item in the array', function(){
            expect(last([1,2,3,0,0,0])).to.be(0)
            expect(last([3])).to.be(3)
        })

        it('should return null if there are no items', function(){
            expect(last([])).to.be(null)
        })

    })

    describe('random', function(){

        it('should get a random element from an array', function(){
            var a = [1]

            expect(random(a)).to.be(1)

            insert(a, 2, 3)

            // Let's try a few times
            expect(a).to.contain(random(a))
            expect(a).to.contain(random(a))
            expect(a).to.contain(random(a))
            expect(a).to.contain(random(a))
        })

    })

    describe('include', function(){

        it('should include only new items', function(){
            var arr = include([1,2,3,4], 1)
            expect(arr).to.eql([1,2,3,4])
            arr = include([1,2,3,4], 5)
            expect(arr).to.eql([1,2,3,4,5])
        })

    })

    describe('combine', function(){

        it('should combine an array', function(){
            var arr = combine([1,2,3,4], [3,1,4,5,6,7])
            expect(arr).to.eql([1,2,3,4,5,6,7])
        })

    })

    describe('empty', function(){

        it('should empty the array', function(){
            var arr = empty([1,2,3,4])
            expect(arr).to.eql([])
        })

    })

    describe('pick', function(){

        it('should pick a value that is not null from the array', function(){
            expect(pick([null, undefined, true, 1])).to.be(true)
        })

        it('should return null', function(){
            expect(pick([])).to.be(null)
        })

    })

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
