"use strict";

var expect = require("expect.js")
var array  = require("../../shell/array")

describe('Array', function(){

    describe('clean', function(){

        it('should clean an array from undefined and null values', function(){
            var items = [null, 1, 0, true, false, "foo", undefined]
            var arr = array.clean(items)
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

            expect(array.invoke([new Item(3), new Item(1), new Item(2)], 'myMethod')).to.eql([3, 1, 2])

        })

    })

    describe('associate', function(){

        it('should associate an array with a specified array', function(){
            var obj = array.associate([1, 2, 3, 0, 0, 0], ['a', 'b', 'c', 'd'])
            expect(obj).to.eql({a:1, b:2, c:3, d:0})
        })

    })

    describe('contains', function(){

        it('should return false if the array does not contain the specified item', function(){
            expect(array.contains([0,1,2], 'not found')).to.not.be.ok()
        })

    })

    describe('append', function(){

        it('should append to an array', function(){
            var a = [1,2,4]
            var b = [2,3,4,5]
            array.append(a, b)
            expect(a).to.eql([1,2,4,2,3,4,5])
            expect(b).to.eql([2,3,4,5])
        })

    })

    describe('last', function(){

        it('should return the last item in the array', function(){
            expect(array.last([1,2,3,0,0,0])).to.be(0)
            expect(array.last([3])).to.be(3)
        })

        it('should return null if there are no items', function(){
            expect(array.last([])).to.be(null)
        })

    })

    describe('random', function(){

        it('should get a random element from an array', function(){
            var a = [1]

            expect(array.random(a)).to.be(1)

            array.push(a, 2, 3)

            // Let's try a few times
            expect(a).to.contain(array.random(a))
            expect(a).to.contain(array.random(a))
            expect(a).to.contain(array.random(a))
            expect(a).to.contain(array.random(a))
        })

    })

    describe('include', function(){

        it('should include only new items', function(){
            var arr = array.include([1,2,3,4], 1)
            arr = array.include([1,2,3,4], 5)
            expect(arr).to.eql([1,2,3,4,5])
        })

    })

    describe('combine', function(){

        it('should combine an array', function(){
            var arr = array.combine([1,2,3,4], [3,1,4,5,6,7])
            expect(arr).to.eql([1,2,3,4,5,6,7])
        })

    })

    describe('empty', function(){

        it('should empty the array', function(){
            var arr = array.empty([1,2,3,4])
            expect(arr).to.eql([])
        })

    })

    describe('pick', function(){

        it('should pick a value that is not null from the array', function(){
            expect(array.pick([null, undefined, true, 1])).to.be(true)
        })

        it('should return null', function(){
            expect(array.pick([])).to.be(null)
        })

    })

    describe('find', function(){

        var arr = [1,2,3,4,5,6,7,8]

        it('should find a value from the array', function(){
            expect(array.find(arr, function(item){
                return item === 8
            })).to.be(8)
        })

        it('should return null', function(){
            expect(array.find(arr, function(item){
                return item === 10
            })).to.be(null)
        })

    })

})
