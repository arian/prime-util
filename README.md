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
var prime = require('prime');
var Options = require('prime-util/options');

var A = prime({

    options: {
        'a': 'aaa',
        'b': 'bbb',
        'c': {
            'd': 'ddd',
            'e': 'eee'
    },
    
    constructor: function(options) {
        this.setOptions(options);
    }

});

mixin(A, Options);

var a = new A({'b': 'B', 'c': {'e': 'E'}});
console.log(a.options); // {'a': 'aaa', 'b': 'B', 'c': {'d': 'ddd', 'e': 'E'}}

```


### types/function

#### fn.bound

Like Function.prototype.bind.

```js
var fn = require('prime-util/types/function')
fn.bound(function(){
    console.log(this) // "prime"
}, "prime")
```

### types/object

#### object.merge

Merges different objects into one object.

```js
var object = require('prime-util/types/object')
object.merge({a: 1}, {a: 2, b: 3}, {c: 4}) // {a: 2, b: 3, c: 4}
```