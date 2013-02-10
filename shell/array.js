/*
array methods
*/"use strict";

var array  = require('prime/es5/array')
var number = require('prime/shell/number')

array.implement({

    clean: function(){
        return array.filter(this, function(item){
            return item != null
        })
    },

    invoke: function(methodName){
        var args = array.slice(arguments, 1)
        return array.map(this, function(item){
            return item[methodName].apply(item, args)
        })
    },

    associate: function(keys){
        var obj = {}, length = Math.min(this.length, keys.length)
        for (var i = 0; i < length; i++) obj[keys[i]] = this[i]
        return obj
    },

    contains: function(item, from){
        return array.indexOf(this, item, from) != -1
    },

    append: function(items){
        this.push.apply(this, items)
        return this
    },

    last: function(){
        return (this.length) ? this[this.length - 1] : null
    },

    random: function(){
        return (this.length) ? this[number.random(0, this.length - 1)] : null
    },

    include: function(item){
        if (!array.contains(this, item)) array.push(this, item)
        return this
    },

    combine: function(items){
        for (var i = 0, l = items.length; i < l; i++) array.include(this, items[i])
        return this
    },

    empty: function(){
        this.length = 0
        return this
    },

    pick: function(){
        for (var i = 0, l = this.length; i < l; i++){
            if (this[i] !== null && this[i] !== undefined) return this[i]
        }
        return null
    },

    find: function(fn, context){
        for (var i = 0, l = this.length; i < l; i++){
            var item = this[i]
            if (fn.call(context, item, i, this)) return item
        }
        return null
     }

})

module.exports = array
