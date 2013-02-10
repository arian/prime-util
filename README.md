Prime-Util
==========

[![Build Status](https://secure.travis-ci.org/arian/prime-util.png)](http://travis-ci.org/arian/prime-util)

Your utilities for [prime](https://github.com/mootools/prime)

## Install

    npm install prime-util

## Current Modules Docs

### prime/mixin

Mixin other primes into another prime

```js
var mixin = require('prime-util/prime/mixin')
mixin(MyPrime, Options, Events)
```

### prime/bound

Provides an alternative way to bind class methods. Stores references to bound
methods internally without any manual setup and does not modify the original
methods.

```js
var bound = require("prime-util/prime/bound")
var mixin = require("prime-util/prime/mixin")

var MyPrime = prime({
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
mixin(MyPrime, bound)
```

### prime/parentize

Parentize makes it easier to call overridden parent methods.

```js
var parentize = require('prime-util/prime/parentize')
var array = require('prime/es5/array')
var mixin = require('prime-util/prime/mixin')
var A = prime({
    a: function(){
        return array.join(arguments)
    }
})
var B = prime({
    inherits: A,
    a: function(){
        // first argument is the parent method name, in this case 'a'
        // the other parameters are passed as the parent method arguments
        return this.parent('a', 'b', 'c') + ',d'
    }
})
mixin(B, parentize)
var b = new B
console.log(b) // logs "b,c,d"
```

### prime/options

Provide "setOptions" method.

```js
var prime = require('prime')
var Options = require('prime-util/prime/options')

var A = prime({

    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
    },

    constructor: function(options){
        this.setOptions(options)
    }

})

mixin(A, Options)

var a = new A({'b': 'B', 'c': {'e': 'E'}})
console.log(a.options); // {'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}}
```

### shell/array

Add familiar MooTools methods to the array shell.

#### array.clean

Create a new array with all elements that are not null or undefined.

```js
array.clean([null, 2, "foo", undefined]) // [2, "foo"]
```

#### array.invoke

Return an array with the named method applied on the array's content.

```js
array.invoke([
    {a: function(arg){ console.log("first", arg)}},
    {a: function(arg){ console.log("second", arg)}}
], 'a', "thing") // logs "first thing" "second thing"
```

#### array.associate

Creates an object with key-value pairs based on the array of keywords passed in
and the current content of the array.

```js
var animals = ['Cow', 'Pig', 'Dog', 'Cat']
var sounds = ['Moo', 'Oink', 'Woof', 'Miao']
array.associate(sounds, animals)
// returns {'Cow': 'Moo', 'Pig': 'Oink', 'Dog': 'Woof', 'Cat': 'Miao'}
```

#### array.contains

Returns true if a value is in the array, otherwise it returns false.

#### array.append

Appends the passed array to the end of the current array.

```js
array.append([1, 2, 3], [4, 5, [6]]) // [1, 2, 3, 4, 5, [6]]
```

#### array.last

Returns the last value of the array.

```js
array.last([1, 2, 3]) // 3
```

#### array.random

Returns a random item from the array.

#### array.include

Pushes the passed element into the array if it's not already present (case and
type sensitive).

```js
array.include(['Cow', 'Pig', 'Dog'], 'Cat') // returns ['Cow', 'Pig', 'Dog', 'Cat']
array.include(['Cow', 'Pig', 'Dog'], 'Dog') // returns ['Cow', 'Pig', 'Dog']
```
#### array.combine

Combines an array with all the items of another. Does not allow duplicates and
is case and type sensitive.

```js
var animals = ['Cow', 'Pig', 'Dog']
array.combine(animals, ['Cat', 'Dog']; //animals = ['Cow', 'Pig', 'Dog', 'Cat']
```

#### array.empty

Empties an array.

```js
var myArray = ['old', 'data']
array.empty(myArray)) // myArray is now []
```

#### array.pick

Returns the first defined value of the array passed in, or null.

```js
array.pick(["foo", "bar"]) // "foo"
array.pick([null, "bar"]) // "bar"
```

#### array.find

Returns the first item in the array for which the function returns true.

```js
array.find([1, 2, 3, 4, 5], function(number){
    return number == 2
}) // returns 2
```

### shell/function

#### fn.bound

Like Function.prototype.bind.

```js
var fn = require('prime-util/shell/function')
fn.bound(function(){
    console.log(this) // "prime"
}, "prime")
```

### shell/object

#### object.merge

Merges different objects into one object.

```js
var object = require('prime-util/shell/object')
object.merge({a: 1}, {a: 2, b: 3}, {c: 4}) // {a: 2, b: 3, c: 4}
```
