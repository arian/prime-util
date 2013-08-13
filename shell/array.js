/*
array methods
*/"use strict";

var array  = require('prime/array')

array.extend({

    append: require('../array/append'),
    associate: require('../array/associate'),
    clean: require('../array/clean'),
    combine: require('../array/combine'),
    contains: require('../array/contains'),
    empty: require('../array/empty'),
    find: require('../array/find'),
    include: require('../array/include'),
    invoke: require('../array/invoke'),
    last: require('../array/last'),
    pick: require('../array/pick'),
    random: require('../array/random')

})

module.exports = array
