Prime-Util
==========

[![Build Status](https://secure.travis-ci.org/arian/prime-util.png)](http://travis-ci.org/arian/prime-util)

Your utilities for [prime](https://github.com/mootools/prime)

## Install

    npm install prime-util

## Current Modules Docs

### prime/bound

Provides an alternative way to bind class methods. Stores references to bound
methods internally without any manual setup and does not modify the original
methods.

```js
var bound = require("prime-util/prime/bound")

var MyPrime = prime({
    mixin: [bound],
    constructor: function(){
        this.results = []
    },
    method: function(i){
        this.results.push(i)
    },
    run: function(){
        [1, 2, 3].forEach(function(this.bound('method')))
        console.log(this.results) // [1, 2, 3]
    }
})
```

### prime/parentize

Parentize makes it easier to call overridden parent methods.

```js
var parentize = require('prime-util/prime/parentize')
var array = require('prime/array')

var A = prime({
    mixin: [parentize],
    a: function(){
        return array.join(arguments)
    }
})
var B = prime({
    mixin: [parentize],
    inherits: A,
    a: function(){
        // first argument is the parent method name, in this case 'a'
        // the other parameters are passed as the parent method arguments
        return this.parent('a', 'b', 'c') + ',d'
    }
})

var b = new B
console.log(b) // logs "b,c,d"
```

### prime/options

Provide "setOptions" method.

```js
var prime = require('prime')
var Options = require('prime-util/prime/options')

var A = prime({
    mixin: [Options],

    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
        }
    },

    constructor: function(options){
        this.setOptions(options)
    }

})

var a = new A({'b': 'B', 'c': {'e': 'E'}})
console.log(a.options); // {'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}}
```

### array/associate

Creates an object with key-value pairs based on the array of keywords passed in
and the current content of the array.

```js
var animals = ['Cow', 'Pig', 'Dog', 'Cat']
var sounds = ['Moo', 'Oink', 'Woof', 'Miao']
associate(sounds, animals)
// returns {'Cow': 'Moo', 'Pig': 'Oink', 'Dog': 'Woof', 'Cat': 'Miao'}
```

### array/include

Pushes the passed element into the array if it's not already present (case and
type sensitive).

```js
include(['Cow', 'Pig', 'Dog'], 'Cat') // returns ['Cow', 'Pig', 'Dog', 'Cat']
include(['Cow', 'Pig', 'Dog'], 'Dog') // returns ['Cow', 'Pig', 'Dog']
```

### array/empty

Empties an array.

```js
var myArray = ['old', 'data']
empty(myArray)) // myArray is now []
```

### array/pick

Returns the first defined value of the array passed in, or null.

```js
pick(["foo", "bar"]) // "foo"
pick([null, "bar"]) // "bar"
```

### object/fromPath

Returns the value from an object by its path

```js
fromPath({
    food: {
        fruits: {
            apples: "red",
            lemon: "yellow"
        }
    }
}, 'food.fruits.apples') // 'red'
```

## Removed Modules
The following modules have been removed:
* prime/mixin - use `mixin` property of prime
* array/clean - use (mout/array/compact)
* array/invoke - use (mout/array/invoke)
* array/contains - use (mout/array/contains)
* array/append - use (mout/array/append)
* array/random - use (mout/random/choice)
* array/combine - use (mout/array/combine)
* array/find - use (mout/array/find)
* object/merge - use (mout/array/merge)
