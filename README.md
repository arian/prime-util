Prime-Util
==========

[![Build Status](https://secure.travis-ci.org/arian/prime-util.png)](http://travis-ci.org/arian/prime-util)

Your utilities for [prime](https://github.com/mootools/prime)

## Current Modules Docs

### prime/mixin

Mixin other primes into another prime

```
var mixin = require('prime-utils/prime/mixin')
mixin(MyPrime, Options, Events)
```

### types/function

#### fn.bound

Like Function.prototype.bind.

```js
var fn = require('prime-utils/types/function')
fn.bound(function(){
    console.log(this) // "prime"
}, "prime")
```

### types/object

#### object.merge

Merges different objects into one object.

```js
var object = require('prime-utils/types/object')
object.merge({a: 1}, {a: 2, b: 3}, {c: 4}) // {a: 2, b: 3, c: 4}
```
